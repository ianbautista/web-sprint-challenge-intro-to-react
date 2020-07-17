// Write your Character component here
import React from "react";
import { PokemonCard } from "../components/styledComponents";

function Character(props) {
	return (
		<PokemonCard>
			{/* found pokemon repository of photos same number code with the pokeapi. (https://github.com/ianbautista/sprites) */}
			<img
				src={
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
					props.code +
					".png"
				}
				alt={`I choose you ${props.name}!`}
			/>
			<h2>{props.name}</h2>
		</PokemonCard>
	);
}

export default Character;
