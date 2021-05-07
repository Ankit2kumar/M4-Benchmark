import React from 'react';
import { Nav } from 'react-bootstrap';
import './SideNavbarStyle.css';

class SideNavbar extends React.Component {
	state = {};
	render() {
		return (
			<>
				<Nav className="nav-style flex-column h-100" defaultActiveKey="/home">
					<Nav.Link href="/home">Active</Nav.Link>
					<Nav.Link eventKey="link-1">Link</Nav.Link>
					<Nav.Link eventKey="link-2">Link</Nav.Link>
					<Nav.Link eventKey="disabled" disabled>
						Disabled
					</Nav.Link>
				</Nav>
			</>
		);
	}
}

export default SideNavbar;
