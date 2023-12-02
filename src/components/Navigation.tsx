import React from 'react'
import NavItem from './NavItem';

export interface INavMenu {
    title: string,
    url: string
}


const Navigation = () => {

    const navList: INavMenu[] = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Blog",
            url: "/posts"
        },
        {
            title: "Schedule",
            url: "/todo"
        },
        {
            title: "Authors",
            url: "/authors"
        },

    ];

  return (
    <>
    <ul className="menu">
        {
        navList?.map((item, index)=><NavItem item={item} key={index}/>)

        }

    </ul>
    </>
  )
}

export default Navigation