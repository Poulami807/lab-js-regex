let input = document.querySelectorAll("input");
function formValidate() {
  input.forEach(inp =>{
    isEmpty(inp)
 })
 const name = checkUsername()
 const add = checkAdd()
 const email = checkEmail()
 const pwd =  checkPwd()
 const cpwd = checkCpwd()
 const ph = checkPh()

 if (name && add && email && pwd && cpwd && ph) {
    alert("Validation successful");
    input.forEach((inp) => (inp.value = ""));
  }
}
function isEmpty(field) {
  if (/^\s*$/.test(field.value)) {
    document.getElementById(`${field.name}`).innerText =
      "Kindly fill this field";
    return true;
  } else {
    document.getElementById(`${field.name}`).innerText =''
    return false;
  }
}
function checkUsername() {
  let name = document.getElementById("Name");
  if (!isEmpty(name)) {
    if (!/^\w{8,15}$/.test(name.value)) {
      document.getElementById("name").innerHTML =
        "Minimum 8 and maximum <br> 15 characters required";
      return false;
    } 
    else {
        document.getElementById("name").innerHTML =''
        return true;
    }
  }
}
function checkAdd() {
  let add = document.getElementById("Add");
  if (isEmpty(add)) 
      return false;
  else 
       return true;
}
function checkEmail() {
  let email = document.getElementById("Email");
  if (!isEmpty(email)) {
    if (!/^([\w\.]+)@(\w+).([a-z]{2,8})(.[a-z]{2,8}?)$/.test(email.value)) {
      document.getElementById("email").innerHTML = "Enter a valid email";
      return false;
    } 
    else {
        document.getElementById("email").innerHTML = "";
      return true;
    }
  }
}
function checkPh() {
  let phone = document.getElementById("Ph");
  if (!isEmpty(phone)) {+6
    if (!/^[6-9]\d{9}$/.test(phone.value) || /\W\D/.test(phone.value)) {
      document.getElementById("phone").innerHTML = "Enter a valid phone no.";
      return false;
    } else {
        document.getElementById("phone").innerHTML = "";
      return true;
    }
  }
}
function checkPwd() {
  let pwd = document.getElementById("Pwd");
  if (!isEmpty(pwd)) {
    if (!(/(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)(?=.*[\!\@\#\$\%\^\&\*\(\)]+)/.test(pwd.value))) {
      document.getElementById("pwd").style.fontSize = "10px";
      document.getElementById("pwd").innerHTML =
        "password must contain 1 uppercase letter,<br> 1 lowercase letter, atleast 1 number ,<br> atleast 1 special character";
      return false;
    } 
    else {
        document.getElementById("pwd").innerHTML =''
        return true;
    }
  }
}
function checkCpwd() {
  let pwd = document.getElementById("Pwd");
  let cpwd = document.getElementById("Cpwd");
  if (!isEmpty(cpwd)) {
    if (cpwd.value !== pwd.value) {
      document.getElementById("cpwd").innerHTML =
        "Password and confirm<br>password must be same";
      return false;
    } else {
        document.getElementById("cpwd").innerHTML = ''
       return true;
    }
  }
}
