import React from 'react';

import AppHeader from '../Header';
import BurgerIngredients from '../Main/burgerIngredients';
import BurgerConstructor from '../Main/burgerConstructor';


// import Main from './components/Main'

import styles from '../../styles/main.module.css';
import style from '../Main/style.module.css';


function App() {

	return (
		<>
		{/* <Header /> */}
		{/* <Main /> */}
		<AppHeader />

		<main className="main">
			<div className={styles.craft}>
				<div className={styles.container}>
					<div className={`${style.craftInner}  ${styles.mainBlockContainer}`}>
						<BurgerIngredients />
						<BurgerConstructor />		
					</div>
				</div>
			</div>
		</main>
		</>
	)
}

export default App;
