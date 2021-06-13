import React from 'react';
// import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className="menu_style">
				{/* After new Update */}
				<NavLink exact activeClassName="active_class" to="/">
					About
				</NavLink>
				<NavLink exact activeClassName="active_class" to="/service">
					Service
				</NavLink>
				<NavLink exact activeClassName="active_class" to="/contact">
					Contact
				</NavLink>
			</div>
			{/* <Link to="/">About</Link>
            <Link to="/contact">Contact</Link> */}

			{/* <a href="/">About Us</a>
            <a href="/contact">Contact Us</a> */}
		</>
	);
};

export default Navbar;
