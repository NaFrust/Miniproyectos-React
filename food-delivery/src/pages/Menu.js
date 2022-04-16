import React from 'react';
import { MenuList } from '../data/data';
import MenuItem from '../components/MenuItem';
import '../style/menus.css';

function menu() {
  return (
    <div className='menu'>
        <div className='menuTitle'>
            <div className='menuList'>
                {MenuList.map((item, key)=>{
                    return (
                    <MenuItem 
                    key={key} 
                    image={item.image} 
                    name={item.name} 
                    price={item.price}
                    />);

                })}    
            </div>
        </div>
    </div>
  )
}

export default menu