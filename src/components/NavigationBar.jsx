import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contacts'}>Contacts</NavLink></li>
      </ul>
    </nav>
  );
}