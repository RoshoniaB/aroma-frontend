import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Cart = () => {
	const [cart] = useContext(CartContext);

	return (
		<div>
			<span>{cart.length}</span>
		</div>
	);
};
