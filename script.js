function validation(){
  
 if(document.myForm.Password.value == ""){

  alert("Do not leave it in blank");
  document.myForm.Password.focus();
  return false;
}

  if(document.myForm.tel.value == ""){
  alert("Do not leave it in blank");
  document.myForms.tel.focus();
  return false; 
    
  }
  if(document.myForm.Email.value == ""){
  alert("Do not leave it in blank");
  document.myForm.Email.focus();
  return false;
  }

  if(document.myForm.Password.value.length  <= 8 ){
  alert("Password must have 8 or more characters.");
  document.myForm.Password.focus();
  return false;
  }
  if(document.myForm.tel.value.length <= 10){
    alert("Telephone number must have 10 Digits");
    document.myForm.tel.focus();
    return false;
  }

  if(document.myForm.Password.value !== "" && document.myForm.tel.value !== "" && document.myForm.Email.value !== ""){
      alert("You may submit your form now.");
       document.myForm.submeter.value = true;
        
  }  
  else{
    document.myForm.submeter.value = false;
    alert("Something is wrong, please check your inputs.");
  }
}


