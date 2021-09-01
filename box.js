import React from 'react'

function Box(props){
    return (
        <div className="box">
            <h3>{props.header}</h3>
            <p>{props.number}</p>
            <p>{props.number2}</p>
            <p>{props.number3}</p>      
        </div>
    )   
}

export default Box;