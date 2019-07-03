import React from 'react';
import withLink from '../hoc/withLink';
import PlaylistItem from '../PlaylistItem';
import '../styles/playlistItems.css';

const PlaylistItemWithLink = withLink(PlaylistItem);

const PlayerlistItems = ({ videos, active }) => {
	return (
		<div className="Items">
			{videos.map(video => (
				<PlaylistItemWithLink
					key={video.id}
					video={video}
					active={video.id === active.id ? true : false}
					played={video.played}
				/>
			))}
		</div>
	);
};

export default PlayerlistItems;
