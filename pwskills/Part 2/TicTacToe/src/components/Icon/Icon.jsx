import { FaPencil, FaRegCircle } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Icon = (name) => {
    if(name=="circle"){
        return <FaRegCircle
        className="icon"/>
    }
    else if(name=="cross"){
        return <FaTimes 
        className="icon"/>
    }
    else{
        return <FaPencil 
        className="icon"/>
    }
}

export default Icon