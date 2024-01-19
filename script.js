function validation_form() {
    var email = document.myform.email.value;
    var passwrd = document.myform.firstpassword.value;
    var Secondpasswrd = document.myform.secondpassword.value;



    if(email.match(/^([a-zA-Z0-9]+)@([a-zA-Z]+)([\.])([a-z]{2,5})$/)){
        
        if(passwrd==""){
            alert("Password cannot be empty");
            return false;
        }
        else if(passwrd == Secondpasswrd){
            return true;
        }
        else{
            alert("Password mismatch!!!!");
            return false;
        }
    }
    else{
        alert("Enter the correct mail id!!!");
        return false;
    }
    
}