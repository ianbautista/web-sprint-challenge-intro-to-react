import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

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

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			<div className="cardContainer">
				{pokemon.map((char) => {
					return <Character name={char.name} />;
				})}
			</div>
			<button onClick={goBack}>{`<`}</button>
			<button onClick={goNext}>{`>`}</button>
		</div>
	);
};

export default App;
