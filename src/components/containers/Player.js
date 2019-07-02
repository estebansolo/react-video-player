import React from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledPlayer from '../styles/StyledPlayer';

const themeNight = {
	bgcolor: '#353535',
	bgcolorItem: '#414141',
	bgcolorItemActive: '#405c63',
	bgcolorPlayed: '#526d4e',
	border: 'none',
	borderPlayed: 'none',
	color: '#ffffff'
};

const themeLight = {
	bgcolor: '#ffffff',
	bgcolorItem: '#ffffff',
	bgcolorItemActive: '#80a7b1',
	bgcolorPlayed: '#7d9979',
	border: '1px solid #353535',
	borderPlayed: 'none',
	color: '#353535'
};

const Player = (props) => {
	const nightModeCallback = () => {};
	const endCallback = () => {};
	const progressCallback = () => {};

	return (
		<ThemeProvider theme={state.nightMode ? themeNight : themeLight}>
			{state.videos !== null ? (
				<StyledPlayer>
					<Video
						active={state.activeVideo}
						autoplay={state.autoplay}
						endCallback={endCallback}
						progressCallback={progressCallback}
					/>
					<Playlist
						videos={state.videos}
						active={state.activeVideo}
						nightModeCallback={nightModeCallback}
						nightMode={nightMode}
					/>
				</StyledPlayer>
			) : null}
		</ThemeProvider>
	);
};

export default Player;
