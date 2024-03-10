'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import classes from './nav-link.module.css'

export default function NavLink({href, children}){
	const path = usePathname()
	const linkClasses = `${classes.link} ${(path.startsWith(href) ? classes.active: "")}`
	return (
		<Link href={href} className={linkClasses}>{children}</Link>
	)
}