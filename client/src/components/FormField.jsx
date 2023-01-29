import React from 'react';

const FormField = (props) => {
	return (
		<div>
			<div className="flex items-center gap-3 mb-3">
				<label htmlFor={props.name} className="block text-sm font-medium text-slate-900">{props.LabelName}</label>
				{props.isSurpriseMe && (
					<button type="button" onClick={props.handleSurpriseMe} className="text-slate-100 text-xs bg-slate-500 py-1 px-2 rounded-lg">Surprise me</button>
				)}
			</div>
			<input type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.handleChange} required className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-teal-700 focus:border-teal-700 outline-none block w-full p-3" />
		</div>
	);
}

export default FormField;