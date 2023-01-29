import React, { useState, useEffect } from 'react';
import { Card, Loader, FormField } from "../components";

const RenderCards = (props) => {
	if (props.data?.length > 0) {
		return props.data.map((post) => <Card key={post._id} {...post} />);
	} else {
		return (<h2 className="mt-5 font-bold text-teal-700 text-xl uppercase">{props.title}</h2>);
	}
}

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState(null);
	const [searchText, setSearchText] = useState("");

	return (
		<section className="mx-auto">
			<div>
				<h1 className="font-extrabold text-3xl">The Community Showcase</h1>
				<p className="mt-2 text-slate-500 text-base max-w-lg">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
			</div>
			<div className="mt-16">
				<FormField />
			</div>
			<div className="mt-10">
				{loading ? (
					<div className="flex justify-center items-center">
						<Loader />
					</div>
				) : (
					<>
						{searchText && (
							<h2 className="font-medium text-slate-500 text-xl mb-3">
								Showing results for <span className="text-slate-800">{searchText}</span>
							</h2>
						)}
						<div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
							{searchText ? (
								<RenderCards data={[]} title="No search result" />
							) : (
								<RenderCards data={[]} title="No posts found" />
							)}
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default Home;