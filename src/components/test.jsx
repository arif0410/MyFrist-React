import React from "react"; 
const Test = ({ name = "unknown", age ="18"}) =>{
    return (
        <div>
            {props.name} - {props.age}
        </div>
    ) 
}
export default Test;