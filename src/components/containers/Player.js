import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledPlayer from '../styles/StyledPlayer';

const themeNight = {
	bgcolorItem: '#414141',
	bgcolorItemActive: '#405c63',
	bgcolorPlayed: '#526d4e',
	borderPlayed: 'none',
	bgcolor: '#360037',
	color: '#ffffff',
	activeColor: "#FFF"
};

const themeLight = {
	bgcolorItem: '#ffffff',
	bgcolorItemActive: '#80a7b1',
	bgcolorPlayed: '#7d9979',
	borderPlayed: 'none',
	bgcolor: '#efefef',
	color: '#000',
	activeColor: "#FFF"
};

const Player = props => {
	let activeVideo = props.match.params.activeVideo;

	const videos = {
		"playlistId":  "wbn_rdx",
		"playlist":  [
			{ 
				"num":  1,
				"title": "Introduction and setup",
				"id": "ghI-gMi1DPc",
				"duration": "10:51",
				"video": "https://www.youtube.com/embed/ghI-gMi1DPc"
			},
			{
				"num": 2,
				"title": "Folder structure, midware and provider",
				"id": "ejJlnMPCmNo",
				"duration": "13:27",
				"video": "https://www.youtube.com/embed/ejJlnMPCmNo"
			}, 
			{
				"num": 3,
				"title": "Action creators for the Home Page",
				"id": "4tuFk_pdWVo",
				"duration": "17:35",
				"video": "https://www.youtube.com/embed/4tuFk_pdWVo"
			},
			{
				"num": 4,
				"title": "Reducers for the Home Page",
				"id": "Jh6Abc_bJ50",
				"duration": "08:34",
				"video": "https://www.youtube.com/embed/Jh6Abc_bJ50"
			},
			{
				"num": 5,
				"title": "Connecting the Home Page",
				"id": "ztHLpdVv9Vc",
				"duration": "13:42",
				"video": "https://www.youtube.com/embed/ztHLpdVv9Vc"
			},
			{
				"num": 6, 
				"title": "Quick Recap",
				"id": "iV5GDHY_cJk",
				"duration": "05:50",
				"video": "https://www.youtube.com/embed/iV5GDHY_cJk"
			},
			{
				"num": 7,
				"title": "Completing the App",
				"id": "XMmSM0TqQ2k",
				"duration": "16:33",
				"video": "https://www.youtube.com/embed/XMmSM0TqQ2k"
			},
			{
				"num": 8,
				"title": "BONUS - Persist the state in sessionStorage",
				"id": "r5fLW4PUrSQ",
				"duration": "10:06",
				"video": "https://www.youtube.com/embed/r5fLW4PUrSQ"
			}, 
			{
				"num": 9,
				"title": "BONUS - Higher order functions",
				"id": "L89dt9sHNJ0",
				"duration": "06:09",
				"video": "https://www.youtube.com/embed/L89dt9sHNJ0"
			}
		]
	};

	const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`))

	const [state, setState] = useState({
		activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
		autoplay: false,
		nightMode: savedState ? savedState.nightMode : true,
		videos: savedState ? savedState.videos : videos.playlist,
		playlistId: savedState ? savedState.playlistId : videos.playlistId
	});

	useEffect(
		() => {
			localStorage.setItem(`${state.playlistId}`, JSON.stringify({...state}))
		},
		[state]
	)

	useEffect(
		() => {
			const videoId = props.match.params.activeVideo;
			if (videoId !== undefined) {
				const newActiveVideo = state.videos.findIndex(video => {
					return video.id === videoId;
				});

				setState({
					...state,
					activeVideo: state.videos[newActiveVideo],
					autoplay: props.location.autoplay
				});
			} else {
				props.history.push({
					pathname: `/${state.activeVideo.id}`,
					autoplay: false
				});
			}
		},
		[activeVideo]
	);

	const nightModeCallback = () => {
		setState(prevState => ({
			...prevState,
			nightMode: !prevState.nightMode
		}))
	};

	const endCallback = () => {
		const videoId = props.match.params.activeVideo;
		const currentVideoIndex = state.videos.findIndex(
			video => video.id === videoId
		)

		const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1 

		props.history.push({
			pathname: `/${state.videos[nextVideo].id}`,
			autoplay: false
		})
	};

	const progressCallback = (e) => {
		if(e.playedSeconds > 10 && e.playedSeconds < 11){
			setState(prevState => ({
				...prevState,
				videos: state.videos.map(video => {
					return video.id === state.activeVideo.id ? {...video, played: true} : video
				})
			}))
		}
	};

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
						nightMode={state.nightMode}
					/>
				</StyledPlayer>
			) : null}
		</ThemeProvider>
	);
};

export default Player;
