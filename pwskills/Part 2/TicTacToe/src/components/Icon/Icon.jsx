import { FaPencil, FaRegCircle } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Icon.css";

const Icon =({name}) => {
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

Icon.propTypes ={
    name: PropTypes.string
}

export default Icon