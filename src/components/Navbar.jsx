import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

 function Navbar() {
  return (
    <nav className='nav'>
        <Link to="/" className='site-title'>HOME</Link>
        <ul>
            <li>
                <CustomLink to="/rebels">Characters</CustomLink>
            </li>
            <li>
                <CustomLink to="/ships">Ships</CustomLink>
            </li>
            <li>
                <CustomLink to="/planets">Planets</CustomLink>
            </li>
            <li>
                <CustomLink to="/search">Search</CustomLink>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar;

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}