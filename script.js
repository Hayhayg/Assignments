function validateForm(){
  let x = document.forms["myForm"]["password"].value;
  let password = x.length;
  if (password < 8){
    alert("Please enter at least an 8 character password");
    return false;
  }
  }

