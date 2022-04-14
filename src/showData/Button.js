import React from 'react'

function Button({buttons,filterData}) {
    console.log(buttons);
  return (
    <div className='btn'>
   
{buttons.map((cat,index)=><div  key={index}>
<button className='btn-sing' onClick={()=>filterData(cat)}>{cat}</button>

</div>)}

{/* 
<button type='button' onClick={()=>filterData('Beef')}>Beef</button>
<button type='button' onClick={()=>filterData('Chicken')}>Chicken</button>
<button type='button' onClick={()=>filterData('All')}>All</button> */}


    </div>
  )
}

export default Button