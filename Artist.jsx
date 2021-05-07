import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ArtistStyle.css';
import SideNavbar from './SideNavbar';
class Artist extends React.Component {
	state = {};
	render() {
		return (
			<>
				<Container>
					<Row>
						<Col lg={2}>
							<SideNavbar />
						</Col>
						<Col lg={4}></Col>
						<Col lg={6}></Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default Artist;
