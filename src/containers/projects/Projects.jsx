import React from 'react'
import './projects.css'

import image from '../../assets/test 10 ps 1.jpg'

const projectsData = [
	{
		title: 'English Village',
		image: '../../assets/Renders/007 english village office/007 stair scene 1 RV1 .jpg',
	},
	{
		title: 'Slava',
		image: '../../assets/Renders/001-Slava Villa Dr.zhilia/001 master bedroom rv3scene 2.jpg',
	},
	{
		title: 'Apartment',
		image: '../../assets/Renders/009 dr kamal apartment/bedroom right side/test 2 A.jpg',
	},
	{
		title: 'another',
		image: '../../assets/Renders/modification/barzan pergola rv3/barzan pergola scene 2  rv3.jpg',
	},
]

const Projects = () => {
	return (
		<div className='projects-container'>
			<div className='image'>
				<img src={image} alt='projects' />
			</div>
			<div className='projects'>
				<h1 className='gradient__text'>Projects</h1>
			</div>
		</div>
	)
}

export default Projects
