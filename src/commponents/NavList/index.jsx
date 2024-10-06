import React from 'react'
import css from "./style.module.css"
const NavList = () => {
	return (
		<nav className={css.navigation}>
			<a className={css.navigation__a} href='#Home'>Home</a>
			<a className={css.navigation__a} href='#Project'>Project</a>
			<a className={css.navigation__a} href='#About'>About</a>
		</nav>
	)
}

export default NavList