import { useState } from 'react'
import users from '../../constants/users.json'
import { setItem } from '../core/storage/storage'
import { useNavigate } from "react-router-dom"
import LoginForm from './loginForm/loginForm'
import Alert from '../alert/alert'

const LoginHolder = () => {
    const [userName,setUserName]=useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [success, setSuccess] = useState<boolean | null>(null)
    const navigate = useNavigate()
  
    const submitForm = ()=>{
      const userExist:any[] = users.filter((user)=>(user.email===userName || user.username === userName)&& user.password===password)
      if(userExist.length>0){
        setItem('userData', JSON.stringify (userExist[0]))
        setSuccess(true)
        setTimeout(()=>{
          navigate('./dashboard')
        },1500)
  
  
      
      }
      else{
        setSuccess(false)
   
      }
  
  
    }
  return (
    <div className="flex  flex-col justify-center items-center h-full py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="mx-auto h-10 w-auto"
      src="/src/assets/images/logo.png"
      alt="Your Company"
    />
    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign In To Quera Employe Management
    </h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    {success && <Alert message='login successful'/>}
    {success===false  && <Alert error={true} title='username or password is wrong'/>}
   <LoginForm setUserName={setUserName} setPassword={setPassword} submitForm={submitForm}/>
  </div>
</div>

  )
}

export default LoginHolder
