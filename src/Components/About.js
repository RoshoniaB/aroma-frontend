import React from 'react';
import { Accordion, Card, Jumbotron, CardImg } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function About() {
	const me = [
		{
			name: 'Roshonia Brooks',
			githubLink: 'https://github.com/RoshoniaB',
			linkedInLink: 'https://www.linkedin.com/in/roshonia-brooks',
		}
	];
	return (
		<Jumbotron className='about'>
			<h1>MEET Me</h1>
			<p className='aboutBody'></p>

			<Accordion defaultActiveKey='1'>
				<Card className='card'>
					<Card.Header className='header'>
						<Accordion.Toggle variant='link' eventKey='0' className='contact'>
							CONTACT
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body className='body'>
							{me.map((me) => {
								return (
									<div className='groupInfo'>
										<h3>{me.name}</h3>
										<a
											href={me.githubLink}
											rel='noopener noreferrer'
											target='_blank'>
											<CardImg className='github' src='img/github.png' />
										</a>
										<a
											href={me.linkedInLink}
											rel='noopener noreferrer'
											target='_blank'>
											<CardImg className='linkedin' src='img/linkedin.jpg' />
										</a>
									</div>
								);
							})}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Jumbotron>
	);
}

export default About;
