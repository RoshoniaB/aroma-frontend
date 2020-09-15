import React, { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import '../App.css';
import { Link } from 'react-router-dom';
import {
	Card,
	Button,
	Container,
	CardColumns,
	Carousel,
} from 'react-bootstrap';

const Home = (props) => {
	const [cart, setCart] = useContext(CartContext);
	const addToCart = (wine) => {
		let newCart = [...cart];
		let itemInCart = newCart.find((item) => wine.brand_name === item.name);
		if (itemInCart) {
			itemInCart.quantity++;
		} else {
			itemInCart = {
				...wine,
				quantity: 1,
			};
			newCart.push(itemInCart);
		}
		setCart(newCart);
	};
	let wine = props.props.map((wine, index) => {
		return (
			<Card className='homeCard row text-center'>
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
					<Card.Body className='homeCardBody'>
						<Card.Title>{wine.brand_name}</Card.Title>
						<Card.Subtitle>{wine.type_name}</Card.Subtitle>
						<br />
						<Card.Subtitle>{wine.price}</Card.Subtitle>
					</Card.Body>
				</Link>
				<Button
					onClick={() => addToCart(wine)}
					className='p-2 mb-2 bg-dark border-0 text-white '>
					Add to cart
				</Button>
			</Card>
		);
	});
	return (
		<div>
			<Container className='home '>
				<Carousel className='carousel' style={{ color: '#868e96' }}>
					<Carousel.Item>
						<img
							className='d-block w-100 carousel'
							src='/img/stock1.jpg'
							alt='First slide'
						/>
						<Carousel.Caption style={{ color: 'black' }}>
							<h3>The best wines are the ones we drink with friends</h3>
							<p>Pick a bottle up today</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100 carousel'
							src='/img/stock2.jpg'
							alt='Third slide'
						/>
						<Carousel.Caption style={{ color: 'black' }}>
							<h3>Check out the deals going on everyday.</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100 carousel'
							src='/img/stock3.jpg'
							alt='Third slide'
						/>
					</Carousel.Item>
				</Carousel>
				<CardColumns>{wine}</CardColumns>
			</Container>
		</div>
	);
};

export default Home;
