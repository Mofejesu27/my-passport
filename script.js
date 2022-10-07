function fullname(){
    let output;
    let name=document.getElementById("name")
    output= name.value
    document.getElementById('myname').innerHTML= output;
}

function email(){
    let output;
    let email=document.getElementById("gmail")
    output= email.value
    document.getElementById('myemail').innerHTML= output;
}


function phonenumber(){
    let validNumber; 
    let phonenumber =document.getElementById("phone")
    input = phonenumber.value
if (input.startsWith('070') || input.startsWith('080') || input.startsWith('081') || input.startsWith('090') || input.startsWith('091')){
    if ( input.length == 11 ){
        validNumber = input
    
    }
    else {
             validNumber = 'Invalid'
          }
        }
          document.getElementById('myphonenumber').innerHTML= validNumber;
    
}