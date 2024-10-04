import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";




const sidebar:any[]=[
    {
    name:"Dashboard",path:'./dashboard',icon:<MdDashboard className="h-6 w-6 shrink-0" />
    },
    {

        name:"Users",path:'./users',icon:<FaUsers  className="h-6 w-6 shrink-0" /> 
    }

]
export default sidebar