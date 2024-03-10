import {Outlet} from 'react-router-dom'
import PostList from '../components/PostList/PostList'

function Posts() {
	return (
		<>
			<Outlet />
			<main>
				<PostList />
			</main>
		</>
	)
}

export default Posts

export const PostLoader = async () => {
	const response = await fetch('http://localhost:8080/posts')
	const resData = await response.json()
	return resData.posts
}