import Link from 'next/link'
import {Suspense} from 'react'
import {getMeals} from '@/lib/meals'
import MealsLoading from '@/components/page-related/meals/meals-grid/meals-loading/meals-loading'
import MealsGrid from '@/components/page-related/meals/meals-grid/meals-grid'
import classes from './page.module.css'

async function Meals(){
	const meals = await getMeals()
	return <MealsGrid meals={meals}/>
}

export const metadata = {
	title: 'All Meals',
	description: 'Some description'
}


export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created {''}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Choose your favorite recipe and cook it yourself. It is easy and fun!
				</p>
				<p className={classes.cta}>
					<Link href="/meals/share">
						Share your favorite recipe
					</Link>
				</p>
			</header>
			<main>
				<Suspense fallback={<MealsLoading />}>
					<Meals />
				</Suspense>
			</main>
		</>
	)
}