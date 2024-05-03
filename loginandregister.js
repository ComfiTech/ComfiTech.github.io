var accounts = [];

function registerLogin(user, pass) {
    var createUsername = user;
    var createPassword = pass;
    var account = {Username : createUsername, Password : createPassword};
    accounts.push(account);
    if (account == accounts[0]) {
        localStorage.setItem("accounts", JSON.stringify(accounts));
        window.location.replace("login.html");
    }
}
    
function checkLogin(user, pass) {
        var accounts = JSON.parse(localStorage.getItem("accounts"));
        for (var i = 0; i < accounts.length; i++) {
            var account = accounts[i];
            var username = account.Username;
            var password = account.Password;
            if (user === username && pass === password) {
                window.location.replace("home.html");
                return;
            }
        }

        alert("Username or password incorrect");
 }

 function checkLoginDonate(user, pass) {
    var accounts = JSON.parse(localStorage.getItem("accounts"));
    for (var i = 0; i < accounts.length; i++) {
        var account = accounts[i];
        var username = account.Username;
        var password = account.Password;
        if (user === username && pass === password) {
            window.location.replace("https://form.123formbuilder.com/6663799/donation-form");
            return;
        }
    }

    alert("Username or password incorrect");
}
 
function loginSend() {
    window.location.replace("login.html");
}

function registerSend() {
    window.location.replace("register.html");
}