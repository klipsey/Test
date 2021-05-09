var d = new Date();
document.getElementById("time").innerHTML = d;

function validateName() {
    var x = document.getElementById('name').value;
    if (x.length===0) {
        alert("Not a valid Username");
        return false;
    }
  return true;
}
function validateEmail() {
    var x = document.getElementById('email').value;
    if (x.length===0) {
        alert("Not a valid Email");
        return false;
    }
  return true;
}

function validateComment() {
  var x = document.getElementById('comment').value;
  	  if (x.length===0) {
        alert("Not a valid comments");
        return false;
    }  
  return true;
}
function validateForm() {
  if (!validateName() || !validateEmail() ||  !validateComment()) {
    alert('Please fix errors to submit.');
    return false;
  }
  else {
    return true;
  }
}