import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

import Player from '../containers/Player';
import NotFound from '../containers/NotFound';

function App() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Player} />
					<Route exact path="/:activeVideo" component={Player} />
					<Route component={NotFound} />
				</Switch>
				<GlobalStyle />
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
