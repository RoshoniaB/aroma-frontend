import React from 'react';

const ShowCart = ({ cart, setCart }) => {
	// const getTotalSum = () => {
	// 	return cart.reduce((sum, { Price, quantity }) => sum + Price * quantity, 0);
	// };

	// const clearCart = () => {
	// 	setCart([]);
	// };

	// const setQuantity = (wine, amount) => {
	// 	const newCart = [...cart];
	// 	newCart.find(
	// 		(item) => item.brand_name === wine.brand_name
	// 	).quantity = amount;
	// 	setCart(newCart);
	// };

	// const removeFromCart = (wineToRemove) => {
	// 	setCart(cart.filter((wine) => wine !== wineToRemove));
	// };
	// const basket = cart.cart.map((wine, idx) => {
	// 	return (
	// 		<div className='wine' key={idx}>
	// 			<h3>{wine.brand_name}</h3>
	// 			<h4>${wine.Price}</h4>
	// 			<input
	// 				value={wine.quantity}
	// 				onChange={(e) => setQuantity(wine, parseInt(e.target.value))}
	// 			/>
	// 			<img src={wine.image} alt={wine.brand_name} />
	// 			<button onClick={() => removeFromCart(wine)}>Remove</button>
	// 		</div>
	// 	);
	// });
	return 
		// <div>
		// 	<h1>Shopping Cart</h1>
		// 	<button onClick={clearCart}>Clear Cart</button>
		// 	<div className='wines'>{basket}</div>

		// 	<div>Total Price: ${getTotalSum()}</div>
		// </div>
	
}

export default ShowCart;
