import React from "react";
import  {NavLink} from 'react-router-dom';
import logo from '../imagenes/logo.svg';

function Header() {
  return (
		<>
			<nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<NavLink to='/' className='navbar-brand'>
						<img className='App-logo' src={logo} alt='logo' width='80' />
					</NavLink>
					<ul className="navbar-nav">
						<li className="nav-item"></li>
						<NavLink to='articles' className='nav-link'>Artículos</NavLink>
					</ul>
				</div>
			</nav>
		</>
		);
}


export default Header;