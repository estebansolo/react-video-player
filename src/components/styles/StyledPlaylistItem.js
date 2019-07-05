import styled from 'styled-components';

const StyledPlaylistItem = styled.div`
	font-family: "Hind", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: ${(props) => (props.active ? props.theme.bgcolorItemActive : 'none')};
	font-size: 1.6em;
	color: ${(props) => (props.active ? props.theme.activeColor : props.theme.color)};
	min-height: 50px;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	position: relative;
	border-bottom: ${(props) => (props.active || !props.played ? 'none' : '2px solid green')};

	@media screen and (max-width: 600px) {
		padding: 0px 15px;  
	}

	.Playlist__Item-nr {
		flex-grow: 1; /* default 0 */
		max-width: 30px;
		padding-right: 20px;
		border-right: 2px solid ${(props) => (props.active ? props.theme.activeColor : props.theme.color)};
		color: ${(props) => (props.active ? props.theme.activeColor : props.theme.color)};
	}

	.Playlist__Item-name,
	.Playlist__Item-name a {
		flex-grow: 10; /* default 0 */
		padding: 0 0 0 10px;
		color: ${(props) => (props.active ? props.theme.activeColor : props.theme.color)};
		text-align: left;
		text-decoration: none;
		display: block;
	}

	.Playlist__Item-time {
		min-width: 45px;
		color: ${(props) => (props.active ? props.theme.activeColor : props.theme.color)};
		font-size: 1em;
		padding: 0px 5px;
		height: 25px;
		text-align: center;
		margin: 0 0 0 5px;
	}

	.active {
		opacity: 0.1;
	}
`;

export default StyledPlaylistItem;
