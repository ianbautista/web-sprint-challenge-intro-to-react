// Write your Character component here
import React from "react";
import { PokemonCard } from "../components/styledComponents";

function Character(props) {
	return (
		<PokemonCard>
			<h2>{props.name}</h2>
		</PokemonCard>
	);
}

export default Character;
