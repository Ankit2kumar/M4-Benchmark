import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalNav from './components/HorizontalNav';
import Artist from './components/Artist';
import MainComponent from './components/MainComponent';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<>
			<Router>
				<HorizontalNav />
				<Route path="/" exact component={MainComponent} />

				<Route exact path="/artist">
					<Artist />
				</Route>
			</Router>
		</>
	);
}

export default App;
