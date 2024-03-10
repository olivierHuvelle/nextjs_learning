import {useLoaderData} from 'react-router-dom'
import Post from '../Post/Post'
import classes from './PostList.module.css'

const PostList = () => {
	const posts = useLoaderData()

	const conditionalRendering = () => {
		if (posts.length > 0) {
			return (
				<ul className={classes.posts}>
					{posts.map(post => <Post author={post.author} body={post.body} id={post.id}
					                         key={post.id} />)}
				</ul>
			)
		} else {
			// dirty
			return (
				<section style={{textAlign: 'center', color: 'white'}}>
					<h2>No post yet</h2>
					<p>Start adding some!</p>
				</section>
			)
		}

	}
	return (
		<>
			{conditionalRendering()}
		</>
	)
}

export default PostList

export const PostLoader = async () => {
	const response = await fetch('http://localhost:8080/posts')
	const resData = await response.json()
}