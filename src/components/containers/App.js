import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/global.css';

import Player from '../containers/Player';
import NotFound from '../containers/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Player} />
				<Route exact path="/:activeVideo" component={Player} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
