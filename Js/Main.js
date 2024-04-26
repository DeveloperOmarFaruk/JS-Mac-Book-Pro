// Get the price button function
function productHaneler(product, price) {
  const productCost = document.getElementById(product + "-cost-show");
  productCost.innerText = parseInt(price);
}

// Calculate function
function calculateTotal(text) {
  const memoryInput = document.getElementById("memory-cost-show");
  const memoryAmount = parseInt(memoryInput.innerText);

  const storageInput = document.getElementById("storage-cost-show");
  const storageAmount = parseInt(storageInput.innerText);

  const deliveryInput = document.getElementById("delivery-cost-show");
  const deliveryAmount = parseInt(deliveryInput.innerText);

  const fixedAmount = parseInt(1299);

  const subTotalAmount =
    fixedAmount + memoryAmount + storageAmount + deliveryAmount;

  document.getElementById("sub-total-price").innerText = subTotalAmount;

  //  pomo code calculation
  if (text == "stevekaku") {
    const discountAmount = subTotalAmount * 20;
    const finalDiscountAmount = discountAmount / 100;
    const totalAmount = subTotalAmount - finalDiscountAmount;
    document.getElementById("total-price").innerText = parseFloat(totalAmount);
  } else {
    document.getElementById("total-price").innerText = subTotalAmount;
  }
}

// All button events handeler
document
  .getElementById("memory-btn-8gb")
  .addEventListener("click", function () {
    productHaneler("memory", 0);
    calculateTotal();
  });

document
  .getElementById("memory-btn-16gb")
  .addEventListener("click", function () {
    productHaneler("memory", 180);
    calculateTotal();
  });

document
  .getElementById("stroage-btn-256gb")
  .addEventListener("click", function () {
    productHaneler("storage", 0);
    calculateTotal();
  });

document
  .getElementById("stroage-btn-512gb")
  .addEventListener("click", function () {
    productHaneler("storage", 100);
    calculateTotal();
  });

document
  .getElementById("stroage-btn-1tb")
  .addEventListener("click", function () {
    productHaneler("storage", 180);
    calculateTotal();
  });

document
  .getElementById("delivery-btn-25agu")
  .addEventListener("click", function () {
    productHaneler("delivery", 0);
    calculateTotal();
  });

document
  .getElementById("delivery-btn-21agu")
  .addEventListener("click", function () {
    productHaneler("delivery", 20);
    calculateTotal();
  });

document.getElementById("apply-btn").addEventListener("click", function () {
  const pomoCodeInput = document.getElementById("pomo-code-input");
  const pomoCodeText = pomoCodeInput.value;
  pomoCodeInput.value = "";
  calculateTotal(pomoCodeText);
});
