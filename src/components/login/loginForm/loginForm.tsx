import React from 'react'
import InputForm from '../../alert/inputForm'

interface ILoginFormProps{
    setPassword:(e:any)=>void,
    setUserName:(e:any)=>void,
    submitForm:(e:any)=>void,

}

const loginForm:React.FC<ILoginFormProps> = ({setUserName,setPassword,submitForm}) => {
  return (
    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
    <div className="space-y-6">
        <InputForm label={'username'} onChange={setUserName} type={'text'} />
        <InputForm label={'password'} onChange={setPassword} type='password' />
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-[#0099CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={submitForm}
      >
        Sign in
      </button>
    </div>
    <div />
  </div>

  )
}

export default loginForm
