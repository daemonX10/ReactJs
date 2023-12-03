import { FaPencil, FaRegCircle } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import {memo} from "react";
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

const MemoizedIcon = memo(Icon);

export default MemoizedIcon;