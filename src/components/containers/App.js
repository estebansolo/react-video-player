import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/global.css';

import Player from '../containers/Player';
import NotFound from '../containers/NotFound';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Player} />
			<Route exact path="/:activeVideo" component={Player} />
			<Route component={NotFound} />
		</Switch>
	);
}

export default App;
