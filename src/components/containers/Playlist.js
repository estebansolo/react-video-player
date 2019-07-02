import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../NightMode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playerlist = ({ videos, active, nightModeCallback, nightMode }) => {
	return (
		<StyledPlaylist>
			<NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
			<PlaylistHeader active={active} total={videos.length} />
			<PlaylistItems active={active} videos={videos} />
		</StyledPlaylist>
	);
};

export default Playerlist;
