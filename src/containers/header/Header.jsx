import React from 'react'

import { project01, project02, project03, project04 } from './imports'

import Carousel from 'react-bootstrap/Carousel'

const Header = () => (
	<div>
		<Carousel fade slide={true}>
			<Carousel.Item interval={2000}>
				<img className='d-block w-100' src={project01} alt='First slide' />
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img className='d-block w-100' src={project02} alt='Second slide' />
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img className='d-block w-100' src={project03} alt='Third slide' />
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img className='d-block w-100' src={project04} alt='Fourth slide' />
			</Carousel.Item>
		</Carousel>
	</div>
)

export default Header
