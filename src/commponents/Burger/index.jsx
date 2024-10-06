import  {useState} from 'react';
import css from './style.module.css'
import Header from '../Header';

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const burgeHandler = () => {
		setIsOpen(!isOpen)
	}
	
	

	return (
		<>
			<button className={css.burger__icon} onClick={burgeHandler}>Menu
			<span className={isOpen ? css.open : css.closed}></span>
			</button>

				
		
		
		</>

	)
	
}

export default BurgerMenu;