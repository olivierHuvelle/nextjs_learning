import MealsItem from '@/components/page-related/meals/meals-grid/meals-item/meals-item'
import classes from './meals-grid.module.css'

export default function MealsGrid({meals}){
	return(
		<ul className={classes.meals}>
			{meals.map(meal => <li key={meal.id}><MealsItem {...meal} /></li>)}
		</ul>
	)
}