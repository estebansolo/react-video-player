import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/containers/App';

ReactDOM.render(
	<HashRouter basename="/">
		<App />
	</HashRouter>,
	document.getElementById('root')
);
