import React,{useState} from "react";
import axios from "axios";

const Login = () => {

        const [user,setUser] = useState({
          email:"",
          password:"",
      })

      const [error,setError] = useState("")
      const [success,setSuccess] = useState("")
      const [token,setToken] = useState("")


      async function verifyUser(e){
        e.preventDefault();
        
        if(!user.email || !user.password){
            setError("Please enter email and password")
            setSuccess("")
        }

    try{
        const response = await  axios.post('https://dummyjson.com/auth/login', 
            {
            
            email: user.email,
            password: user.password,
            }
            )
            
                setSuccess(response.data.message)
                setToken(response.data.data.token)
                setError("")
                localStorage.setItem("email" , user.email)
                localStorage.setItem("password" , user.password)
            
    } 
    catch(err){
      
            setError(err.response.data.message)
            setSuccess("")
    
    }
        

    }
  return (
    <>
        <form className='main'  onSubmit={verifyUser}>
            <div>
                <h6>Welcome Back!🖐</h6>
                <h2>Sign in to your account</h2>
            </div>
             <div>
                <label>Your email</label><br/>
                <input type='email' onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
            </div><br/>
            <div>
                <label>Password</label><br/>
                <input type='password' onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
            </div><br/>
            <button  className='btn' type='submit'>CONTINUE</button>
            <h6 className='forgot'>Forgot your password!</h6>
        </form>
        <p className='signup'>Didn't have account? <span>Sign up</span></p>

        {error && <h4 className="error">{error}</h4>}
            {
                success && <h4 className="success">{success}</h4>
            }
    </>

  )
}

export default Login
