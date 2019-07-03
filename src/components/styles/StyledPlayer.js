import styled from 'styled-components';

const StyledPlayer = styled.div`
	min-height: 100vh;
	background: ${(props) => props.theme.bgcolor};

	.Player__Title {
		color: ${(props) => props.theme.color};
		font-size: 5em;
		text-shadow: 1px 1px violet;

		@media screen and (max-width: 520px) {
			font-size: 4em;
		}
	}

	.Player__Wrapper {
		display: flex;
		transition: all 0.5s ease;
		align-items: flex-start;

		@media screen and (min-width: 1180px) {
			width: 1180px;
			margin: auto;
		}

		@media screen and (max-width: 900px) {
			flex-direction: column;
			align-items: center;
		}
	}
`;

export default StyledPlayer;
