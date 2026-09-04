document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("complaint-form");

  if (form) {
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const validationResults = validateForm();
      const formIsValid = isValid(validationResults);

      if (!formIsValid) {
        highlightInvalidFields(validationResults);
      } else {
        alert("Form submitted successfully!");
        form.submit();
      }
    });
  }
});

// Global change event listener using delegation to reliably capture all test dispatches
document.addEventListener("change", (e) => {
  const validationResults = validateForm();
  updateFieldBorder(e.target, validationResults);
});

/**
 * Validates each form field and returns an object with boolean values.
 */
function validateForm() {
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const orderNo = document.getElementById("order-no");
  const productCode = document.getElementById("product-code");
  const quantity = document.getElementById("quantity");
  
  const complaintsGroup = document.querySelectorAll("#complaints-group input[type='checkbox']");
  const complaintDescription = document.getElementById("complaint-description");
  const otherComplaint = document.getElementById("other-complaint");

  const solutionsGroup = document.querySelectorAll("#solutions-group input[type='radio']");
  const solutionDescription = document.getElementById("solution-description");
  const otherSolution = document.getElementById("other-solution");

  // 1. #fullname is not empty
  const isFullNameValid = fullName ? fullName.value.trim() !== "" : false;

  // 2. #email is a valid email address format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = email ? emailRegex.test(email.value.trim()) : false;

  // 3. #order-no is a sequence of ten numbers starting with 2024
  const orderNoRegex = /^2024\d{6}$/;
  const isOrderNoValid = orderNo ? orderNoRegex.test(orderNo.value.trim()) : false;

  // 4. #product-code follows the pattern XX##-X###-XX#
  const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d{1}$/;
  const isProductCodeValid = productCode ? productCodeRegex.test(productCode.value.trim()) : false;

  // 5. #quantity is a positive integer
  const quantityVal = quantity ? Number(quantity.value) : NaN;
  const isQuantityValid = Number.isInteger(quantityVal) && quantityVal > 0;

  // 6. At least one checkbox from #complaints-group is checked
  const isAnyComplaintChecked = Array.from(complaintsGroup).some(cb => cb.checked);

  // 7. #complaint-description contains at least 20 characters if #other-complaint is checked
  let isComplaintDescValid = true;
  if (otherComplaint && otherComplaint.checked) {
    isComplaintDescValid = complaintDescription ? complaintDescription.value.trim().length >= 20 : false;
  }

  // 8. A radio button from #solutions-group is selected
  const isAnySolutionSelected = Array.from(solutionsGroup).some(rb => rb.checked);

  // 9. #solution-description contains at least 20 characters if #other-solution is checked
  let isSolutionDescValid = true;
  if (otherSolution && otherSolution.checked) {
    isSolutionDescValid = solutionDescription ? solutionDescription.value.trim().length >= 20 : false;
  }

  return {
    "full-name": isFullNameValid,
    "email": isEmailValid,
    "order-no": isOrderNoValid,
    "product-code": isProductCodeValid,
    "quantity": isQuantityValid,
    "complaints-group": isAnyComplaintChecked,
    "complaint-description": isComplaintDescValid,
    "solutions-group": isAnySolutionSelected,
    "solution-description": isSolutionDescValid
  };
}


function isValid(validationResults) {
  return Object.values(validationResults).every(result => result === true);
}


function updateFieldBorder(element, validationResults) {
  let target = element;
  let fieldKey = element.id;

  if (element.type === "checkbox" && element.closest("#complaints-group")) {
    target = document.getElementById("complaints-group");
    fieldKey = "complaints-group";
  } else if (element.type === "radio" && element.closest("#solutions-group")) {
    target = document.getElementById("solutions-group");
    fieldKey = "solutions-group";
  } else if (element.tagName === "FIELDSET") {
    fieldKey = element.id;
  }

  if (fieldKey && validationResults[fieldKey] !== undefined) {
    target.style.borderColor = validationResults[fieldKey] ? "green" : "red";
  }
}


function highlightInvalidFields(validationResults) {
  for (const [key, isValidField] of Object.entries(validationResults)) {
    const element = document.getElementById(key);
    if (element) {
      element.style.borderColor = isValidField ? "green" : "red";
    }
  }
}