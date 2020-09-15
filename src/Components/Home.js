import React, { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import '../App.css';
import { Link } from 'react-router-dom';
import { Card, Button, Container, CardColumns } from 'react-bootstrap';

const Home = (props) => {
	  const [cart, setCart] = useContext(CartContext);
	const addToCart = () => {
		setCart((currentState) => [...currentState, wine]);
		localStorage.setItem('wine', JSON.stringify());
	};
	let wine = props.props.map((wine, index) => {
		return (
			<Card className='homeCard row'>
				<Link
					to={`/info/${wine.id}`}
					key={index + wine.id}
					style={{ textDecoration: 'none' }}>
					<Card.Img
						fluid='true'
						variant='top'
						src={wine.image_url}
						alt='Card image cap'
						className='homeCardImg'
					/>
					<Card.Body>
						<Card.Title>{wine.brand_name}</Card.Title>
						<Card.Subtitle>{wine.type_name}</Card.Subtitle>
						<br />
						<Card.Subtitle>{wine.price}</Card.Subtitle>
					</Card.Body>
				</Link>
				<Button variant='primary' onClick={addToCart}>
					Add to cart
				</Button>
			</Card>
		);
	});
	return (
		<Container className='home'>
			<CardColumns>{wine}</CardColumns>
		</Container>
	);
};

export default Home;
