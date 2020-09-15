import React, { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import { Card, Button, Image, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Info(props) {
	const [wine, setWine] = useState([]);
	const [cart, setCart] = useContext(CartContext);
	const addToCart = () => {
		setCart((currentState) => [...currentState, wine]);
		localStorage.setItem('wine', JSON.stringify());
	};
	useEffect(() => {
		const id = props.match.params.wine;
		const getWine = async () => {
			const url = `http://localhost:8000/wines/${id}`;
			const result = await axios.get(url);
			setWine(result.data);
		};
		getWine();
	}, [props.match.params.wine]);
	return (
		<div>
			<Container className='d-flex align-items-center infoContainer'>
				<Image src={wine.image_url} className='infoImg align-self-center' />
				<Card className='text-center' class=''>
					<Card.Header
						className='navHeader'
						style={{ backgroundColor: '#868e96' }}>
						<h4>{wine.brand_name}</h4>
					</Card.Header>
					<Card.Body>
						<Card.Title>
							{wine.type_name}
							<br />
							{wine.wine_type}
						</Card.Title>
						<Card.Text>{wine.location}</Card.Text>
						<Card.Text>{wine.wine_year}</Card.Text>
						<hr style={{ border: '1px solid', color: '#4c3557' }} />
						<Card.Text>{wine.price}</Card.Text>
						<Button
							variant='primary'
							onClick={addToCart}
							className='p-2 mb-2 bg-dark border-0 text-white'>
							Add to cart
						</Button>
					</Card.Body>
					{/* <Card.Footer className='text-muted'>2 days ago</Card.Footer> */}
				</Card>
			</Container>
			<Card className='bg-dark text-#2b3137 description'>
				<Card.Img src='/img/wood.jpg' alt='wood' className='wood' />
				<Card.ImgOverlay>
					<Card.Title>
						<h2>Description</h2>
					</Card.Title>
					<Card.Text>{wine.description}</Card.Text>
				</Card.ImgOverlay>
			</Card>
		</div>
	);
}

export default Info;
