import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><NavLink activeClassName={'active'} exact to={'/'}>Home</NavLink></li>
        <li><NavLink activeClassName={'active'} exact to={'/about'}>About</NavLink></li>
        <li><NavLink activeClassName={'active'} exact to={'/contacts'}>Contacts</NavLink></li>
        <li><NavLink activeClassName={'active'} to={'/blog'}>Blog</NavLink></li>
      </ul>
    </nav>
  );
}