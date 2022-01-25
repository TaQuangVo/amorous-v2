import style from "./style.module.css"
import { useState, useContext } from "react";

import { authContext } from "../../context/AuthContext"


export default function index({next}) {
    
    const {user,register,login,logout} = useContext(authContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")
    const [isLogin, setIsLogin] = useState(true);

    const [content, setContent] = useState({
        email:"Email",
        password:"Password",
        confirmPassword:"Confirm password",
        login:"Login",
    })

    const handleSubmit = async () =>{
        if(isLogin){
            const [user, err] = await login(email, password);

            if(!err) {
                console.log(user)
                next()
            }
        }else{

            if(password != confirmPwd) return

            const [user, err] = await register(email, password);
            console.log(user);

            if(!err) next()
        }
    }

    const handleAccoutSubmit = async ({isLogin,email,password,confirmPwd}) => {
        
    }


    return (
        <form className={style.form}>
            <label htmlFor="email"  name="email">{content.email}</label>
            <input className={style.inputfield} type="email" id="email" onChange={ e => setEmail(e.target.value) } autoComplete="username"/>
            
            <label htmlFor="password">{content.password}</label>
            <input className={style.inputfield} type="password" onChange={ e => setPassword(e.target.value) } id="password" autoComplete="current-password"/>
            
            {
                !isLogin && (
                    <>
                    <label htmlFor="confirmPassword">{content.confirmPassword}</label>
                    <input className={style.inputfield} type="password" onChange={ e => setConfirmPwd(e.target.value) } id="confirmPassword" autoComplete="current-password"/>
                    </>
                )
            }
            
            <input className={style.inputSubmit} type="button" value={isLogin?"Login":"Register"} onClick={handleSubmit}></input>
            {
                !isLogin ? 
                <p>Returned customer? <span onClick={()=>{setIsLogin(true)}}>Login</span></p> :
                <>
                    <p>New custumer? <span onClick={()=>{setIsLogin(false)}}>Resister</span></p>
                    <p className={style.forgotPassword}><span>Forgot Password</span></p>
                </>
            }
        </form>
    )
}
