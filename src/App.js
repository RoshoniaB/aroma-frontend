import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Components/Home';
import { CartProvider } from './Cart/CartContext';
import Nav from './Components/Nav';
import { Route } from 'react-router';
import About from './Components/About';
import Info from './Components/Info';
import ShowCart from './Cart/ShowCart'
function App() {
	const [wine, setWine] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:8000/wines/')
			.then((res) => {
				setWine(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div className='App'>
			<CartProvider>
				<Nav />
				<Route
					path='/'
					exact
					render={() => {
						return <Home props={wine} />;
					}}
				/>
				<Route path='/about' component={About} />
				<Route path='/cart/showcart' component={ShowCart} />
				<Route
					path='/info/:wine'
					render={(routerProps) => {
						return <Info match={routerProps.match} props={wine} />;
					}}
				/>
			</CartProvider>
		</div>
	);
}

export default App;
