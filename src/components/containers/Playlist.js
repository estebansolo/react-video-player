import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../NightMode';
import '../styles/playlist.css';

const Playerlist = ({ videos, active, nightModeCallback, nightMode }) => {
	return (
		<div className="Playlist">
			<NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
			<PlaylistHeader active={active} total={videos.length} />
			<PlaylistItems active={active} videos={videos} />
		</div>
	);
};

export default Playerlist;
