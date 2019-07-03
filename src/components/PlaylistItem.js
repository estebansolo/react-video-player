import React from 'react';
import StyledPlaylistItem from '../components/styles/StyledPlaylistItem';

const PlaylistItem = ({ video, active, played }) => {
	return (
		<StyledPlaylistItem active={active} played={played}>
			<div className="Playlist__Item-nr">{video.num}</div>
			<div className="Playlist__Item-name">{video.title}</div>
			<div className="Playlist__Item-time">{video.duration}</div>
		</StyledPlaylistItem>
	);
};

export default PlaylistItem;
