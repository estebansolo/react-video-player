import styled from 'styled-components';

const StyledPlayer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.bgcolor};

	.Player__Title {
		color: ${(props) => props.theme.color};
		font-size: 5em;
		text-shadow: 3px 3px 5px ${(props) => props.theme.shadow};

		@media screen and (max-width: 900px) {
			font-size: 4em;
		}

		@media screen and (max-width: 500px) {
			font-size: 3em;
		}

		@media screen and (max-width: 370px) {
			font-size: 2.5em;
		}
	}

	.Player__Wrapper {
		display: flex;

		transition: all 0.5s ease;
		align-items: flex-start;

		@media screen and (min-width: 1180px) {
			width: 1180px;
			margin: 0 auto;
		}

		@media screen and (max-width: 1180px) {
			width: 96vw;
		}

		@media screen and (max-width: 900px) {
			flex-direction: column;
			align-items: center;
		}
	}
`;

export default StyledPlayer;
