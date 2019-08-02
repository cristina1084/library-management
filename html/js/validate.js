var pm = /^[6-9][0-9]{9}$/;
var nm = /^[\.a-zA-Z ]+$/;
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate(id,f1){
    var v1 = document.getElementById(id).value;
    console.log(id);
    
    if(id=="name"){
        if(!v1.match(nm))
            document.getElementById(f1).innerHTML="<h6 style='font-size:x-small;'>Name should contain only alphabets</h6>";
        else document.getElementById(f1).innerHTML="";
    }
    else if(id=="email"){
        if(!v1.match(mail)) 
            document.getElementById(f1).innerHTML="<h6 style='font-size:x-small;'>Invalid email</h6>";
        else document.getElementById(f1).innerHTML="";
    }
    else if(id=="mobile"){
        if(!v1.match(pm)) 
            document.getElementById(f1).innerHTML="<h6 style='font-size:x-small;'>Invalid phone number</h6>";
        else document.getElementById(f1).innerHTML="";
    }   
}