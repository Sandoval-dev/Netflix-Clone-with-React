import React from 'react'

interface NavItemProps{
    name:string;
    active?:boolean;

}


const NavItem = ({name,active}:NavItemProps) => {
  return (
    <div className={active ? ' text-white cursor-pointer' : 'text-gray-400 hover:text-gray-200 transition cursor-pointer'}>
      {name}
    </div>
  )
}

export default NavItem
