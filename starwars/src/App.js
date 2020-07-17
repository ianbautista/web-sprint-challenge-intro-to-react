import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import { Button } from "./components/styledComponents";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	const [pokemon, setPokemon] = useState([]);
	const [previous, setPrevious] = useState("");
	const [next, setNext] = useState("");

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon")
			.then((response) => {
				setPokemon(response.data.results);
				setPrevious(response.data.previous);
				setNext(response.data.next);
			})
			.catch((error) => {
				console.log(`Oops!! Team Rocket is here! Causing ${error}`);
			});
	}, []);

	// adding buttons to get all pokemons

	const goBack = (event) => {
		event.preventDefault();
		axios
			.get(previous)
			.then((response) => {
				setPokemon(response.data.results);
				setPrevious(response.data.previous);
				setNext(response.data.next);
			})
			.catch((error) => {
				console.log(`Oops!! Team Rocket is here! Causing ${error}`);
			});
	};

	const goNext = (event) => {
		event.preventDefault();
		axios
			.get(next)
			.then((response) => {
				setPokemon(response.data.results);
				setPrevious(response.data.previous);
				setNext(response.data.next);
			})
			.catch((error) => {
				console.log(`Oops!! Team Rocket is here! Causing ${error}`);
			});
	};

	// to get pokemoncode for photos
	const pokemonCode = (url) => {
		let code = url.substring(url.length - 4);
		let number = code.replace(/\D/g, "");
		// console.log(url);
		// console.log(url.length - 4);
		// console.log(number);
		// console.log(code);
		return number;
	};

	return (
		<div className="App">
			<div className="Header"></div>
			<div className="cardContainer">
				{pokemon.map((char) => {
					return <Character name={char.name} code={pokemonCode(char.url)} />;
				})}
			</div>
			<Button onClick={goBack}>{`<`}</Button>
			<Button onClick={goNext}>{`>`}</Button>
		</div>
	);
};

export default App;
