import React from 'react'

function Button({buttons,filter}) {

  return (
    <div>
     {buttons.map((cat,index)=>{
  return  <button type='button' onClick={()=>filter(cat)}>{cat}</button>
     })}
    </div>
  )
}

export default Button