import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App () {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<NavBar />
						<Home />
					</Route>
					<Route path="/rooms/">
						<NavBar />
						<Rooms />
					</Route>
					<Route path="/rooms/:room">
						<NavBar />
						<SingleRoom />
					</Route>
					<Route path="*">
						<NavBar />
						<Error />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
