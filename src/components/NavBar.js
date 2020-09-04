import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import React from 'react';
import { useState } from 'react';

function NavBar () {
	const [ isToggle, setToggle ] = useState(false);
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={logo} alt="Beach" />
					</Link>
					<button onClick={() => setToggle(!isToggle)} type="button" className="nav-btn">
						<FaAlignRight className="nav-icon" />
					</button>
				</div>
				<ul className={isToggle ? 'nav-links show-nav' : 'nav-links'}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/rooms">Rooms</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;

/* class NavBar extends Component {
	state = {
		isToggle : false
	};
	HandleToggler = () => {
		this.setState({
			isToggle : !this.state.isToggle
		});
	};
	render () {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img src={logo} alt="Beach" />
						</Link>
						<button onClick={this.HandleToggler} type="button" className="nav-btn">
							<FaAlignRight className="nav-icon" />
						</button>
					</div>
					<ul className={this.state.isToggle ? 'nav-links show-nav' : 'nav-links'}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/rooms">Rooms</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar; */
