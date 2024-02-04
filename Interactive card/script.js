function reflect(field) {
    //get the replacement  
    let cardHolder = document.getElementById("card-holder").value;
    let cardNumber = document.getElementById("card-number").value;
    let expDate = document.getElementById("exp-date").value;
    let cvc = document.getElementById("cvc").value;

    // places to reflect
    let new_Holder = document.getElementById("name-holder");
    let number_change = document.getElementById("number-place");
    let new_Date = document.getElementById("date");
    let new_cvc = document.getElementById("cvc-change");

    //get card  name 
    if (field === 'card-holder') {
        new_Holder.textContent = cardHolder;

    //get card number
    } else if (field === 'card-number') {
        number_change.value = cardNumber;
    }

    //get expiry date
    else if (field === 'exp-date') {
        new_Date.value = expDate;
    }

    //get cvc
    else if (field === 'cvc') {
        new_cvc.value = cvc;
    }
}
