import React from 'react';
import { Link } from 'react-router-dom';
import StyledNotFound from '../styles/StyledNotFound';

function NotFound() {
	return (
		<StyledNotFound>
			<div className="NotFound__Text">404: Not Found</div>
			<div className="NotFound__Gradient" />
			<div className="NotFound__Button">
				<Link to="/">Back to the Player</Link>
			</div>
		</StyledNotFound>
	);
}

export default NotFound;
