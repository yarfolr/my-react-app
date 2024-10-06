import BurgerMenu from '../Burger'
import { useState } from 'react'
import css from './style.module.css'

const Header = () => {
	return (
		<header className={css.header}>
			<div className='container'>
				<div className={css.inner}>
					<a href='' className={css.logo}>
						Logo
					</a>
					<BurgerMenu />
				</div>
			</div>
		</header>
	)
}

export default Header
