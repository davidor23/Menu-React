import React from 'react';
//Accessing the items and iterating over the list. 
//done with destructering inside using const id,img, etc set to menuItem
const Menu = ({items}) => {
  return ( <div class="section-center">
    {items.map(menuItem => {
      const {id,title,img,desc,price } = menuItem;
      return <article key={id} className="menu-item">
        <img src={img} alt={title} className="photo"/>
        <div className="item-info">
          <header>
            <h4>{title}</h4>
    <h4 className="price"> {price}</h4>
          </header>
          <div>
            <p className="item-text">{desc}</p>
          </div>
        </div>
      </article>
      })}
  </div>
  )};

export default Menu;
