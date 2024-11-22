export const checkValidData=(email,password,)=>{
    
    
    const isEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    if(!isEmail)return "Email is invalid";
    else if(!isPassword)return "Password is invalid";
   
    return null;
}