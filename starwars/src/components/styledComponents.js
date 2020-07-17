import styled from "styled-components";

// styling charcters

export const PokemonCard = styled.div`
	background-color: white;
	width: 150px;
	margin: 1rem;
    border-radius: 10%;
    
    /* animation stretch */
    @keyframes wiggle {
		0% {
			transform: skewX(9deg);
		}
		10% {
			transform: skewX(-8deg);
		}
		20% {
			transform: skewX(7deg);
		}
		30% {
			transform: skewX(-6deg);
		}
		40% {
			transform: skewX(5deg);
		}
		50% {
			transform: skewX(-4deg);
		}
		60% {
			transform: skewX(3deg);
		}
		70% {
			transform: skewX(-2deg);
		}
		80% {
			transform: skewX(1deg);
		}
		90% {
			transform: skewX(0deg);
		}
		100% {
			transform: skewX(0deg);
		}
	}

    h2 {
        font-size: 1rem;
        padding: 0.5rem;
        color: dodgerblue;
    }

    &:hover {
		h2 {
			display: none;
        }
        img {
		animation-name: wiggle;
		animation-timing-function: ease-in;
		animation-duration: 0.5s;
		animation-iteration-count: infinite;
	}

`;

// setting button styling

export const Button = styled.button`
	background-color: gold;
	color: dodgerblue;
	font-size: 2rem;
	width: 60px;
	height: 60px;
	padding: 0.5rem;
	border: 2px solid dodgerblue;
	margin: 0.2rem;
	box-shadow: inset 0 4px 6px 0 gray;
	&:hover {
		background-color: dodgerblue;
		color: gold;
		box-shadow: inset 0 0px 0px 0 gray;
	}
`;
