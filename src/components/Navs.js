import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavList,LinkStyled } from './Navs.styled';



const LINKS = [
    {to:"/",text:"Home"},
    {to:"/starred",text:"starred"}
];

const Navs = () => {

  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map(link => (
            <li key={link.to}>
                <LinkStyled className={link.to === location.pathname ? 'active' : ''} to={link.to}>{link.text}</LinkStyled>
            </li>
        ))}
      </NavList>
    </div>
  )
}

export default Navs
