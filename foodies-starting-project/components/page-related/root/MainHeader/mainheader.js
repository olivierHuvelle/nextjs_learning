import Link from 'next/link'
import Image from 'next/image'
import MainHeaderBackground from '@/components/page-related/root/MainHeaderBackground/main-header-background'
import NavLink from '@/components/page-related/root/MainHeader/NavLink/nav-link'
import LogoImg from '@/assets/logo.png'
import classes from './mainheader.module.css'

export default function MainHeader(){
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={LogoImg} alt="this is an alt message" priority />
					NextLvl Food
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}