import React,{useState} from "react";
import "./Login.scss"
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    let [phone,setphone]=useState("");
    const[pass,setpass]=useState("");
    const[isFill,setFill]=useState(false);
    const[nameerr,seterr]=useState(false);
    const[pswerr,seterror]=useState(false);
    const [pswlimit,setlimit]=useState(false);
    
    let a=useNavigate()
    
    
    const handle=(e)=>{
        e.preventDefault()
        if(e.target.name==="phone"){
            setphone(e.target.value)
        }
        else if(e.target.name==="pass"){
            setpass(e.target.value)
        }
    }
    const login=(e)=>{
        e.preventDefault()
        if(phone===""||pass===""){
            setFill(true)
        }
        else if(phone.length!==10){
            seterr(true)
        }
        else if(pass.length<6){
            seterror(true)
        }
        else if(pass.length>15){
            setlimit(true)
        }
        else {
           a("/home")
        }
        
    }
    
    return(
        <div className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card1">
                            <h1>Login Page</h1>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card2">
                            <form>
                                <div className="num-div">
                                    <input type="text" placeholder="phone number" name="phone" id="email" value={phone} onChange={handle}/>
                                    {isFill&&phone===''?
                                        <p className='error'>*Please Enter your Mobile number</p>:""}
                                    {
                                        nameerr?<p className="error">*Number must be 10 characters</p>:""
                                    }
                                        
                                </div>
                                <div className="psw-div">
                                    <input type="password" placeholder="Password" name='pass' id="pass" value={pass} onChange={handle} />
                                    {isFill&&pass==="" ? <p className='error'>*This field cannot be empty</p>:""}
                                    {
                                        pswerr?<p className="error">*Password minimum has 6 characters</p>:""
                                    }
                                    {
                                        pswlimit?<p className="error">*Password within 15 characters</p>:""
                                    }
                                </div>
                                <div className="login-btn">
                                    <button  onClick={login} value="Log in">Log in</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}