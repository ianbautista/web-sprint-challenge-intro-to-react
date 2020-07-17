import styled from "styled-components";

// styling charcters

export const PokemonCard = styled.div`
	background-color: white;
	width: 150px;
	margin: 1rem;
	border-radius: 10%;
	h2 {
		font-size: 1rem;
		padding: 0.5rem;
		color: dodgerblue;
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
