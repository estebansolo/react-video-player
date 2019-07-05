import styled from 'styled-components';

const StyledNotFound = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	background-color: #0b1319;
	color: white;
	font-family: "Hind", sans-serif;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	.NotFound__Text {
		font-weight: 800;
		font-size: 5em;
	}

	.NotFound__Gradient {
		content: "";
		background: repeating-linear-gradient(50deg, yellow 5px, yellow 33px, black 0px, black 67px);
		width: 100vw;
		height: 60px;
		margin-bottom: 35px;
	}

	.NotFound__Button a {
		color: #0b1319;
		text-decoration: none;
		padding: 8px 20px;
		font-size: 1.5em;
		background-color: #CCCCCC;
	}
`;

export default StyledNotFound;
