import {Outlet} from 'react-router-dom'
import MainHeader from '../../components/MainHeader/MainHeader'

const RootLayout = () => {
	return (
		<>
			<MainHeader />
			<Outlet />
		</>
	)
}

export default RootLayout