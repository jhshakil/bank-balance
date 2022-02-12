// Log in page 
function submitButton() {
    // emale inpute 
    const emailCollection = document.getElementById('your-email');
    const email = emailCollection.value;
    // Password input 
    const passwordCollection = document.getElementById('your-password');
    const password = passwordCollection.value;
    // condition Check 
    if (email == 'shakil@gmail.com' && password == 'shakil') {
        window.location.href = 'bank-site.html';
    }
    else {
        alert('Please Enter valid information')
    }
}
// deposite and withdrow 
function moneyCollect(input) {
    const moneyInput = document.getElementById(input);
    const moneyValue = moneyInput.value;
    moneyInput.value = '';
    return moneyValue;
}
// Deposite and withdrow money add 
function moneyAdd(value, money) {
    const moneyOutput = document.getElementById(value);
    const moneyTotal = parseFloat(moneyOutput.innerText) + parseFloat(money);
    return moneyOutput.innerText = moneyTotal;
}

// Balance Update 
function balanceUpdate(money, ifadd) {
    const balance = document.getElementById('total-balance');
    if (ifadd == true) {
        const totalBalance = parseFloat(balance.innerText) + parseFloat(money)
        return balance.innerText = totalBalance;
    } else {
        const totalBalance = parseFloat(balance.innerText) - parseFloat(money)
        return balance.innerText = totalBalance;
    }
}

// deposite 
function depositeButton() {
    const money = moneyCollect('deposite-amount');
    if (money > 0) {
        moneyAdd('deposite-value', money);
        balanceUpdate(money, true);
    } else {
        alert('Please enter a valid amount');
    }
}

// withdrow 
function withdrowButton() {
    const money = moneyCollect('withdrow-amount');
    const balanceFix = document.getElementById('total-balance');
    const balanceFixed = parseFloat(balanceFix.innerText);
    if (money > 0 && balanceFixed >= money) {
        moneyAdd('withdrow-value', money);
        balanceUpdate(money, false);
    } else {
        alert('Please enter a valid amount');
    }
}