window.addEventListener('DOMContentLoaded', (e) => {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
})


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


const loanInput = document.querySelector('#loan-amount');
const termInYearsInput = document.querySelector('#loan-years');
const yearlyRateInput = document.querySelector('#loan-rate');

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 300000, years: 30, rate: 3.0};
  const loanInput = document.querySelector('#loan-amount');
  const termInYearsInput = document.querySelector('#loan-years');
  const yearlyRateInput = document.querySelector('#loan-rate'); 
  loanInput.setAttribute('placeholder', 'Ex. ' + values.amount);
  termInYearsInput.setAttribute('placeholder', 'Ex. ' + values.years);
  yearlyRateInput.setAttribute('placeholder', 'Ex. ' + values.rate);
  update();
  
};

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // values.amount = loanInput.value;
  // values.years = termInYearsInput.value;
  // values.rate = (yearlyRateInput.value / 100)
  let numerator = values.amount * ((values.rate / 100) / 12);
  let denominator = 1 - (1 + ((values.rate / 100) / 12)) ** (values.years * 12 * -1);
  monthlyPayment = (numerator / denominator);
  return parseFloat(monthlyPayment).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}





