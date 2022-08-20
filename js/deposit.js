/*
  1. add event listener to the deposit button
  2. get deposit amount fromt the deposit input field.
  2-5: make sure convert string deposit amount to a number type.
  3. clear the depsoit input filed after getting the value
  4. get the previous deposit total
  5. calculate new deposit total and set the value to the deposit the value
*/

// Step-1:
 document.getElementById('btn-deposit').addEventListener('click', function()
 {
 

   // Step-2:
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

   // step-3:
   depositField.value = '';

   // Step-4:
    const depositTotalElement = document.getElementById('desposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;





   
 })