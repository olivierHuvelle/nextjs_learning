'use client'

export default function MealsError({error}){
	console.error(error)
	return(
		<main className="error">
			<h1>An error occurred</h1>
			<p>Some dummy message</p>
		</main>
	)
}