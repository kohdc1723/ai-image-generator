import React from 'react'
import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
	return (
		<div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
			card
			<img src={photo} alt={prompt} className="w-full h-auto object-cover rounded-xl" />
			<div className="group-hover:flex flex-col hidden absolute bottom-0 left-0 right-0 bg-slate-700 rounded-xl"></div>
		</div>
	)
}


export default Card