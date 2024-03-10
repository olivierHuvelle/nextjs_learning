import ReactDOM from "react-dom/client"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import RootLayout from './routes/RootLayout/RootLayout'
import Posts, {PostLoader} from './routes/Posts'
import NewPost, {PostAction} from './routes/NewPost/NewPost'
import PostDetails, {PostDetailsLoader} from './routes/PostDetails/PostDetails'
import "./index.css"

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Posts />,
				loader: PostLoader,
				children: [
					{
						path: '/create-post',
						element: <NewPost />,
						action: PostAction
					},
					{
						path: '/:id',
						element: <PostDetails />,
						loader: PostDetailsLoader
					}
				]
			}
		]
	}
])

const entryPoint = document.getElementById("root")
ReactDOM.createRoot(entryPoint).render(<RouterProvider router={router} />)
