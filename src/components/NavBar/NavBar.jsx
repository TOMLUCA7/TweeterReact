import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}

export default NavBar