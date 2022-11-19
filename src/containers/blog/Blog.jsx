import React from 'react'
import './blog.css'

import { project01, project02, project03, project04 } from './imports'

import Carousel from 'react-bootstrap/Carousel'

const Blog = () => (
	<div>
		<Carousel fade slide={true}>
			<Carousel.Item interval={2000}>
				<img className='d-block w-100' src={project01} alt='First slide' />
				<Carousel.Caption>
					<h3>Slava City</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img className='d-block w-100' src={project02} alt='Second slide' />

				<Carousel.Caption>
					<h3>English Village</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img className='d-block w-100' src={project03} alt='Third slide' />
				<Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img className='d-block w-100' src={project04} alt='Third slide' />
				<Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
)

export default Blog
