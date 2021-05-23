function alphabet(inputtext) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.match(alphaExp)) {
        return true;
    } else {
        return false;
    }
}

function textNumeric(inputtext) {
    var numericExpression = /^[0-9]+$/;
    if (inputtext.match(numericExpression)) {
        return true;
    } else {
        return false;
    }
}

function firstName() {
    var x = document.getElementById('firstName').value;
    if (!alphabet(x) || x.length > 20) {
        alert("Not a valid first name");
        return false;
    }
    return true;
}

function lastName() {
    var x = document.getElementById('lastName').value;
    if (!alphabet(x) || x.length > 50) {
        alert("Not a valid last name");
        return false;
    }
    return true;
}

function email() {
    var x = document.getElementById('email').value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    return true;
}

function phone() {
    var x = document.getElementById('phone').value;
    if (!textNumeric(x) || x.length > 15) {
        alert("Not a valid phone number");
        return false;
    }
    return true;
}

function username() {
    var x = document.getElementById('username').value;
    if (x.length > 12 || x.length === 0) {
        alert("Not a valid username");
        return false;
    }
    return true;
}

function password() {
    var x = document.getElementById('password').value;
    if (x.length > 7 || x.length === 0) {
        alert("Not a valid password");
        return false;
    }
    return true;
}

function address() {
    var x = document.getElementById('address').value;
    if (x.length === 0) {
        alert("Not a valid address");
        return false;
    }
    return true;
}

function city() {
    var x = document.getElementById('city').value;
    if (x.length === 0) {
        alert("Not a valid city");
        return false;
    }
    return true;
}

function state() {
    var x = document.getElementById('state').value;
    if (x.length === 0) {
        alert("Not a valid state");
        return false;
    }
    return true;
}

function country() {
    var x = document.getElementById('country').value;
    if (x.length === 0) {
        alert("Not a valid country");
        return false;
    }
    return true;
}

function zip() {
    var x = document.getElementById('zip').value;
    var y = document.getElementById('country').value;
    if (y.length == 2) {
        if (x.length > 5 || x.length === 0) {
            alert("Not a valid Zip");
            return false;
        } else {
            return true;
        }
    }
    return true;
}

function validateForm() {
    if (!firstName() || !lastName() || !email() || !phone() || !username() || !password() || !address() || !city() || !country() || !state() || !zip()) {
        alert('Please fix all errors to submit.');
        return false;
    } else {
        alert('Thank you very much.');
        return true;
    }
}