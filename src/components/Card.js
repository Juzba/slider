import "./Card.css";
import Button from "./Button";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import data from "../data";
import { useState } from "react";

const Card = () => {
	let [filmCount, setFilmCount] = useState(0);
	const { image, title, description } = data[filmCount];

	const switchFilm = () => {
		if (filmCount > data.length - 1) filmCount = 0;
		else if (filmCount < 0) filmCount = data.length - 1;

		setFilmCount(filmCount);
	};

    
	return (
		<div className='card'>
			<div className="imgContainer">
				<img src={image} alt={title}></img>
			</div>
			<h2>{title}</h2>
			<p>{description}</p>
			<div className='buttons'>
				<Button switchFilm={() => switchFilm(--filmCount)} icon={FaAnglesLeft()} className='btn' />
				<Button switchFilm={() => switchFilm(++filmCount)} icon={FaAnglesRight()} className='btn' />
			</div>
		</div>
	);
};

export default Card;
