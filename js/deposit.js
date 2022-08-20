/*
  1. add event listener to the deposit button
  2. get deposit amount fromt the deposit input field.
  2-5: make sure convert string deposit amount to a number type.
  3. clear the depsoit input filed after getting the value
  4. get the previous deposit total
  5. calculate new deposit total and set the value to the deposit the value
  6.  get current balance.
  7. calculate the new balance and set it to the balance total element
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

    // step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // step-7:
    const newBalanceTotal = previousBalanceTotalAmount+newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;




   
 })