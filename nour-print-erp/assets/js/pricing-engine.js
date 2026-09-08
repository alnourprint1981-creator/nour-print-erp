/* pricing-engine.js — منطق حساب التسعير (JS Vanilla فقط، بدون DOM)
   يطبّق FR-PRICE-01 → FR-PRICE-03 و FR-PRICERULE-01 → 06 */

/* تكلفة خامة واحدة مع الهالك */
function calculateMaterialCost(materialPrice, quantityUsed, wastePercent) {
  var waste = (materialPrice * quantityUsed) * (wastePercent / 100);
  return materialPrice * quantityUsed + waste;
}

/* الإجمالي وتكلفة الوحدة من مكونات التكلفة (القسم 7.1) */
function calculateTotalCost(inputs) {
  var sub = (inputs.materialsCost || 0) + (inputs.printingCost || 0) +
            (inputs.cuttingCost || 0) + (inputs.breakingCost || 0) +
            (inputs.laborCost || 0) + (inputs.glueCost || 0) +
            (inputs.machineCost || 0) + (inputs.miscExpenses || 0) +
            (inputs.spongeVelvetCost || 0);
  var wasteCost = sub * (inputs.wastePercent || 0) / 100;
  var totalCost = sub + wasteCost;
  var qty = inputs.quantity || 1;
  return { subtotal: sub, wasteCost: wasteCost, totalCost: totalCost, unitCost: totalCost / qty };
}

/* تطبيق هامش الربح — النسبة المئوية / الثابت / اليدوي / شرائح الكمية */
function applyProfitMargin(unitCost, marginType, marginValue, quantity) {
  quantity = quantity || 1;
  if (marginType === "fixed") {          // ربح ثابت لكل وحدة
    return unitCost + (marginValue || 0);
  }
  if (marginType === "manual") {         // سعر بيع يدوي مباشر
    return marginValue || unitCost;
  }
  if (marginType === "tiers") {          // شرائح كمية: مصفوفة {from,to,margin}
    var m = marginValue;
    if (Array.isArray(m)) {
      for (var i = 0; i < m.length; i++) {
        if (quantity >= m[i].from && (m[i].to === null || quantity <= m[i].to)) {
          return unitCost * (1 + (m[i].margin || 0) / 100);
        }
      }
    }
    return unitCost; // شريحة غير معرّفة → بلا هامش
  }
  // percentage (افتراضي)
  return unitCost * (1 + (marginValue || 0) / 100);
}

/* الحساب الكامل لعرض السعر — يرجع تفصيل القسم 7.4 */
function calculateFullQuote(order) {
  var d = pricingDefaults;
  var qty = order.quantity || 1;

  var breakdown = {
    cardboard:      order.cardboardSheets  != null ? calculateMaterialCost(d.cardboardSheetPrice,  order.cardboardSheets,  order.wastePercent) : 0,
    paper:          order.paperSheets      != null ? calculateMaterialCost(d.paperSheetPrice,      order.paperSheets,      order.wastePercent) : 0,
    printing:       order.operations.printing ? d.printingPerBox * qty : 0,
    cutting:        0,
    dieCutting:     order.operations.dieCutting ? d.dieCuttingMachineCost : 0,   // تُوزع على الكمية (FR-RULE-05)
    breaking:       order.operations.breaking   ? d.breakingCost : 0,
    labor:          d.laborPerBox * qty,
    glue:           d.gluePerBox * qty,
    machineRun:     d.electricityPerBox * qty,
    spongeVelvet:   order.operations.spongeVelvet ? d.spongeVelvetPerBox * qty : 0,
    misc:           d.miscExpenses
  };

  var inputs = {
    quantity: qty,
    wastePercent: order.wastePercent,
    materialsCost: breakdown.cardboard + breakdown.paper,
    printingCost: breakdown.printing,
    cuttingCost: breakdown.cutting + breakdown.dieCutting,
    breakingCost: breakdown.breaking,
    laborCost: breakdown.labor,
    glueCost: breakdown.glue,
    machineCost: breakdown.machineRun,
    miscExpenses: breakdown.misc,
    spongeVelvetCost: breakdown.spongeVelvet
  };

  var totals = calculateTotalCost(inputs);
  var unitSalePrice = applyProfitMargin(totals.unitCost, order.marginType, order.marginValue, qty);

  return {
    breakdown: breakdown,
    subtotal: totals.subtotal,
    wasteCost: totals.wasteCost,
    totalCost: totals.totalCost,
    unitCost: totals.unitCost,
    marginAmount: unitSalePrice - totals.unitCost,
    unitSalePrice: unitSalePrice,
    grandTotal: unitSalePrice * qty
  };
}
