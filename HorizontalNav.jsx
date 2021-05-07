import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './HorizontalNavStyle.css';

class HorizontalNav extends React.Component {
	state = {};
	render() {
		return (
			<>
				<Navbar className="home-nav d-flex justify-content-center">
					<Nav className="mr-auto " as="ul">
						<Nav.Item className="nav-item " as="li">
							<Nav.Link className="nav-link" href="#home">
								TRENDING
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="nav-item" as="li">
							<Nav.Link className="nav-link" href="#features">
								PODCASTS
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="nav-item" as="li">
							<Nav.Link className="nav-link" href="#pricing">
								MOODS AND GENRES
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="nav-item" as="li">
							<Nav.Link className="nav-link" href="#pricing">
								NEW RELEASES
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="nav-item" as="li">
							<Nav.Link className="nav-link" href="#pricing">
								DISCOVER
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar>
			</>
		);
	}
}

export default HorizontalNav;
