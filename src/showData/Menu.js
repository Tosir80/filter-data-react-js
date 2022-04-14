import React from 'react'

function Menu({menuItem}) {
  return (
    <div className='item-container'>
        {
            menuItem.map(item=><div>
                <h2>{item.strCategory}</h2>
                <img src={item.strCategoryThumb} alt="" />
            </div>)
        }
    </div>
  )
}

export default Menu