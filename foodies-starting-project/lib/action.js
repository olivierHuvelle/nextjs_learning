'use server'
import {redirect} from 'next/navigation'
import {saveMeal} from '@/lib/meals'
import {revalidatePath} from 'next/cache'

const isTextInvalid = (text) => {
	return !text || text.trim() === ''
}

export const shareMeal = async (prevState, formData) => {
	'use server'
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	}

	if(isTextInvalid(meal.title) ||
		isTextInvalid(meal.summary) ||
		isTextInvalid(meal.instructions) ||
		isTextInvalid(meal.creator) ||
		isTextInvalid(meal.creator_email) ||
		!meal.creator_email.includes('@') ||
		!meal.image || meal.image.size === 0
	){
		return {
			message: 'invalid input'
		}
	}

	await saveMeal(meal)
	revalidatePath('/meals') // note on peut préciser le composant ex layout ou page
	redirect('/meals')
}