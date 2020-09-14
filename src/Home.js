import React from 'react';
import './App.css'
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap';

const Home = (props) => {
	return (
		<div className="homeContainer">
			{props.props.map((wine) => (
				<Card className="homeCard">
					<CardImg
						top
						src={wine.image_url}
                        alt='Card image cap'
                        className = 'homeCardImg'
					/>
					<CardBody>
						<CardTitle>{wine.brand_name}</CardTitle>
						<CardSubtitle>{wine.type_name}</CardSubtitle>
						<Button>Add to cart</Button>
					</CardBody>
				</Card>
			))}
		</div>
	);
};

export default Home;
