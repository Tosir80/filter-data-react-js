import React from 'react'

function Menu({menuItem}) {

  return (
    <div>
      <div className="menu_container">
          {menuItem.map((item,key)=> <div className='single_item'  key={key}>
              <h3>{item.category}</h3>
              <img src={item.categoryThumb} alt="not found" />
          </div>)}
        
      </div>
    </div>
  )
}

export default Menu
