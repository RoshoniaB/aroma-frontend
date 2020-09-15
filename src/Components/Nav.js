import React from 'react';
import Cart from '../Cart/Cart'
import ShowCart from '../Cart/ShowCart'
import {
	Nav as ReactNav,
	Navbar,
	Button,
	FormControl,
	Form,
	Image,
} from 'react-bootstrap';

function Nav(props) {
	return (
		<Navbar className='navbar'>
			<Navbar.Brand href='/'><h2>Aroma</h2></Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' expanded='false' />
			<Navbar.Collapse className='basic-navbar-nav'>
				<ReactNav className='mr-auto'>
					<ReactNav.Link className='link' href='/'>
						Red
					</ReactNav.Link>
					<ReactNav.Link className='link' href='/'>
						White
					</ReactNav.Link>
					<ReactNav.Link className='link' href='/'>
						Rosé
					</ReactNav.Link>
					<ReactNav.Link className='link' href='/'>
						Dessert
					</ReactNav.Link>
					<ReactNav.Link className='link' href='/'>
						Sparkling
					</ReactNav.Link>
					<ReactNav.Link className='link' href='/about'>
						About
					</ReactNav.Link>
				</ReactNav>
			</Navbar.Collapse>
			{/* <Form inline>
				<FormControl type='text' placeholder='Search' className='mr-sm-2' />
				<Button variant='outline-success'>
					<Image src='/img/mag.png' className='searchBtn'></Image>
				</Button>
			</Form> */}
			<ReactNav.Link href='/cart/showcart'>
				<Cart inline />
				<Image className='cartLink' src='/img/basketIcon.png' />
			</ReactNav.Link>
		</Navbar>
	);
}

export default Nav;
