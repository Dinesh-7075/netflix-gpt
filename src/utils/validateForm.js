export const validateEmail = (email, password)=>{
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    if(!isEmailValid) return "Please enter a valid email address."
    return null;
}
export const validatePwd = (password)=>{
    const isPwdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isPwdValid)  return "Your password must contain between 4 and 60 characters."
    return null;
}
