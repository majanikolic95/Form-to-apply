var fullname = document.getElementById("inp");
var email = document.getElementById("eml");
var information = document.getElementById("msg");
var send = document.getElementById("btn");

var  xx;

send.addEventListener("click" ,validation);
fullname.addEventListener("focus" ,clear);
email.addEventListener("focus" ,clear);
information.addEventListener("focus" ,clear);

function validation () {
    xx = 1;
    //name
    if (fullname.value == "") {
        fullname.value = "*Fild is required";
        fullname.style.color ="red";
        xx = 0;
    };
    //email
  
    if (email.value == "") {
        email.value = "*Fild is required";
        email.style.color ="red";
        xx = 0;
        
    };
    //information
    if (information.value == "") {
        information.value = "*Fild is required";
        information.style.color ="red";
        xx = 0;
        
    };
    if (xx == 1) {
    window.location.assign("second.html");
}

}

function clear () {
    this.value = "";
    this.style.color="black";
}


