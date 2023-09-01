const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2 ');

form.addEventListener('submit', e => {
e.preventDefault();
validateInputs();

});

const setError = (element,message) =>{

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querryselector('.error');

    errorDisplay.innnerText = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('sucess');
}

const setSucess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querrySelector('error');

    errorDisplay.innnerText = '';
    inputControl.classlist.add('error');
    inputControl.classlist.remove('sucess');
    
};

const isvalidEmail = email =>{
    const re = /^(([^<>]))
}
const validateInputs = () =>{
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value. trim();


if (usernameValue ===''){
    setError(username, 'Username is required');

}else{
    setSucess(username);

}
if (emailValue===''){
    setError(email,'Email is required');
}else if (!isvalidEmail(emailValue)){
    setError(email,'provide a valid email address');
}else{
    setSucess(email);
}
if (passwordValue === ''){
    setError(password,'password is required');
}else if(passwordValue.length <8){
    setError(password,'password must be at least 8 characters.');
}else{
    setSucess(password);
}
if (password2Value=== ''){
    setError(password2, 'please confirm your password');
}else if (password2Value !==  passwordValue){
    setError(password2,"password doesn't match");
}else{
    setSucess(password2);
}

};