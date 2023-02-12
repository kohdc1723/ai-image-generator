import React from 'react'
import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
	return (
		<div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
			<img src={photo} alt={prompt} className="w-full h-auto object-cover rounded-xl" />
			<div className="group-hover:flex flex-col m-1 p-3 hidden absolute bottom-0 left-0 right-0 bg-slate-700 rounded-xl opacity-90">
				<p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
				<div className="mt-3 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="w-7 h-7 rounded-full object-cover bg-teal-700 flex justify-center items-center text-white text-xs font-bold">
							{name[0]}
						</div>
						<div className="text-white text-sm">{name}</div>
					</div>
					<button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
						<img src={download} alt="download" className="w-7 h-7 object-contain invert" />
					</button>
				</div>
			</div>
		</div>
	)
}


export default Card