import React from 'react';
import ReactPlayer from 'react-player';
import './styles/video.css';

const Video = ({ active, autoplay, endCallback, progressCallback }) => (
	<div className="Video">
		<div className="Video__Wrapper">
			<ReactPlayer
				width="100%"
				height="100%"
				playing={autoplay}
				controls={true}
				url={active.video}
				onEnded={endCallback}
				onProgress={progressCallback}
			/>
		</div>
	</div>
);

export default Video;
