let sendmsgcontact = document.getElementById("sendmsgcontact");
let fullnameinput = document.getElementById("fullnameinput");
let emailinput = document.getElementById("emailinput");
let subjectinput = document.getElementById("subjectinput");
let msginput = document.getElementById("msginput");
let fullnameinputvalue = fullnameinput.value;
let emailinputvalue = emailinput.value;
let subjectinputvalue = subjectinput.value;
let msginputvalue = msginput.value;

emailinputvalue = Boolean(emailinputvalue);
subjectinputvalue = Boolean(subjectinputvalue);
fullnameinputvalue = Boolean(fullnameinputvalue);
msginputvalue = Boolean(msginputvalue)
sendmsgcontact.addEventListener("click",checkinputs)

function checkinputs() {
    if(fullnameinputvalue === false) {
        fullnameinput.style.borderColor = 'red';
    }
    if(emailinputvalue === false) {
        emailinput.style.borderColor ='red';
    }
    if(subjectinputvalue === false) {
        subjectinput.style.borderColor = 'red';
    } 
    if( msginputvalue === false) {
        msginput.style.borderColor = 'red';
    } if(fullnameinputvalue === true && emailinputvalue === true && subjectinputvalue === true && msginputvalue === true) {

        window.location.href = 'https://google.com'
    }


}