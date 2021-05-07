import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SideNavbarStyle.css';
import SideNavbar from './SideNavbar';
class MainComponent extends React.Component {
	state = {};
	// componentDidMount = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem'
	// 		);
	// 		const arr = await response.json();
	// 		console.log(arr.data[0].album.cover_big);
	// 		arr.data.map((elem) => (
	// 			<Col sm={6} md={4} lg={2}>
	// 				<Card>
	// 					<Card.Img src={elem.data.album.cover_big} />

	// 					<Card.Text style={{ alignItems: 'center' }}>
	// 						The Spice Girls
	// 					</Card.Text>
	// 				</Card>
	// 			</Col>
	// 		));
	// 	} catch (error) {}
	// };
	render() {
		return (
			<>
				<Container className="px-0 mx-0">
					<Row>
						<Col lg={2}>
							<SideNavbar />
						</Col>
						<Col lg={10}>
							<Row>
								<h4 id="home-title-one">#THROWBACKTHURSDAY</h4>
							</Row>
							<Row>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
								<Col className="my-5" sm={6} md={4} lg={2}>
									<Card>
										<Card.Img src="../../public/Assests/spice.jpg" />
									</Card>
									<p>The Spice Girls</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default MainComponent;
