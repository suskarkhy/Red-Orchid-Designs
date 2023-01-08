import React from 'react'
import './projects.css'
import { Link } from 'react-router-dom'

import image from '../../assets/Website/Our Projects Page/One landscape photo/007 Manager scene 2  RV1.jpg'
import logo from '../../assets/RO-logo-transBR.png'
import { img1, img2, img3, img4 } from './imports'

import { Container } from 'react-bootstrap'

const projectsData = [
	{
		title: 'English Village',
		image: img1,
	},
	{
		title: 'Slava',
		image: img2,
	},
	{
		title: 'Apartment',
		image: img3,
	},
	{
		title: 'another',
		image: img4,
	},
]

const Projects = () => {
	return (
		<div className='projects'>
			<div className='image'>
				<img src={image} alt='projects' />
				<h1>Projects</h1>
				<img className='logo' src={logo} alt='logo' />
			</div>
			<Container>
				<div className='projects__container'>
					{projectsData.map((item, index) => (
						<div className='project' key={item.title + index}>
							<Link to={`/projects/${item.title}`}>
								<h4>{item.title}</h4>
								<img src={item.image} alt={item.title} />
							</Link>
						</div>
					))}
				</div>
			</Container>
		</div>
	)
}

export default Projects
