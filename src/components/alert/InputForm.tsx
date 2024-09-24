
const inputForm = ({label,onChange,type }:{label:string,onChange:(e:any)=>void,type:string}) => {
  return (
    <div>
    <label
      htmlFor="Username"
      className="block text-sm font-medium leading-6 text-gray-900 undefined"
    >
      {label}
    </label>
    <div className="mt-2">
      <input
        id="Username"
        name="Username"
        type={type}
        autoComplete="current-password"
        className="px-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
        onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  </div>  
  )
}

export default inputForm
