import Link from 'next/link'

export default function MealsPage(){
	return (
		<main>
			<h1>Meal page</h1>
			<p>
				<Link href="/meals/share">Share</Link>
			</p>
			<section>
				<h2>Some meals</h2>
				<article>
					<Link href="/meals/special-meal"><h3>My special meal</h3></Link>
					<p>This is a dummy description</p>
				</article>
			</section>
		</main>
	)
}