import React from 'react'


const getStyle = btn=>{
    const className={
        "=" : "answer",
        "+-" : "operator",
        "%" : "operator",
        "/" : "operator",
        "*" : "operator",
        "-" : "operator",
        "+" : "operator",
        "C" : "clear"
    }
    return className[btn]
}

const Button = ({value,onClick}) => {



  return (
    <button className={`${getStyle(value)} btn`} onClick={() => onClick(value)}>
    {value}
  </button>
  )
}

export default Button