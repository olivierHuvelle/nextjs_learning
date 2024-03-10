import {Link, Form, redirect} from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
import classes from './Newpost.module.css'

const NewPost = () => {
	return (
		<Modal>
			<Form method="POST" className={classes.form}>
				<p>
					<label htmlFor="body">Text</label>
					<textarea id="body" name="body" required rows={3}/>
				</p>
				<p>
					<label htmlFor="name">Your name</label>
					<input type="text" id="name" name="author" required/>
				</p>
				<p className={classes.actions}>
					<Link to=".." type="button">
						Cancel
					</Link>
					<button>Submit</button>
				</p>
			</Form>
		</Modal>
	)
}

export default NewPost

export const PostAction = async ({request}) => {
	const formData = await request.formData()
	const postData = Object.fromEntries(formData)
	await fetch('http://localhost:8080/posts', {
		method: 'POST',
		body: JSON.stringify(postData),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	return redirect('/')
}