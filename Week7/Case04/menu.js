"use strict";

function updateSubtotal() {
  // Prices
  const justJavaPrice = 2.0;
  const cafeAuLaitPrice = parseFloat(document.getElementById("cafeAuLaitSize").value);
  const icedCappuccinoPrice = parseFloat(document.getElementById("icedCappuccinoSize").value);

  // Quantities
  const justJavaQty = parseInt(document.getElementById("justJavaQty").value);
  const cafeAuLaitQty = parseInt(document.getElementById("cafeAuLaitQty").value);
  const icedCappuccinoQty = parseInt(document.getElementById("icedCappuccinoQty").value);

  // Subtotals
  const justJavaSubtotal = justJavaQty * justJavaPrice;
  const cafeAuLaitSubtotal = cafeAuLaitQty * cafeAuLaitPrice;
  const icedCappuccinoSubtotal = icedCappuccinoQty * icedCappuccinoPrice;

  // Display subtotals
  document.getElementById("justJavaSubtotal").textContent = `$${justJavaSubtotal.toFixed(2)}`;
  document.getElementById("cafeAuLaitSubtotal").textContent = `$${cafeAuLaitSubtotal.toFixed(2)}`;
  document.getElementById("icedCappuccinoSubtotal").textContent = `$${icedCappuccinoSubtotal.toFixed(2)}`;

  // Calculate total
  const total = justJavaSubtotal + cafeAuLaitSubtotal + icedCappuccinoSubtotal;

  // Display total
  document.getElementById("totalAmount").textContent = `$${total.toFixed(2)}`;
}
