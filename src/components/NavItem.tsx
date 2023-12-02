import React from 'react'
import { INavMenu } from './Navigation'

interface INavMenuItem {
    item: INavMenu
}

const NavItem = ({item}:INavMenuItem) => {
  return (
    <li><a href={item.url}>{item.title}</a></li>
  )
}

export default NavItem