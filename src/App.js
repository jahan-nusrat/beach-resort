import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
					<Route path="/rooms/:slug">
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
