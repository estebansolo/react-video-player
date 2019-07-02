import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

const NightMode = ({nightModeCallback, nightMode}) => {
	return (
		<StyledNightmode>
			<span>NightMode: </span>
			<label className="switch">
				<input type="checkbox" checked={nightMode} onchange={nightModeCallback} />
				<span className="slider round"></span>
			</label>
		</StyledNightmode>
	);
};

export default NightMode;
