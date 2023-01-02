import './project.css'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'

import images from './imports'

const Project = () => {
	const [show, setShow] = useState(false) // for modal
	const [img, setImg] = useState('') // for modal

	const { name } = useParams()

	const handleShow = (item) => {
		setShow(true)
		setImg(item)
	}
	const handleClose = () => {
		setShow(false)
		setImg('')
	}

	const projectsData = [
		{
			name: 'English Village',
			layout: [
				{
					header: images.EV.header,
				},
				{
					grid: [
						images.EV.grid[0],
						images.EV.grid[1],
						images.EV.grid[2],
						images.EV.grid[3],
						images.EV.grid[4],
						images.EV.grid[5],
						images.EV.grid[6],
						images.EV.grid[7],
						images.EV.grid[8],
						images.EV.grid[9],
						images.EV.grid[10],
						images.EV.grid[11],
						images.EV.grid[12],
						images.EV.grid[13],
						images.EV.grid[14],
						images.EV.grid[15],
					],
				},
			],
			text: 'project was done in english village.',
		},
		{
			name: 'Slava',
			layout: [
				{
					header: '', // image for the header
				},
				{
					grid: [], // images for the body
				},
			],
			text: 'project was done in slava.',
		},
		{
			name: 'Apartment',
			layout: [
				{
					header: '', // image for the header
				},
				{
					grid: [], // images for the body
				},
			],
			text: 'project was done in this place.',
		},
	]

	const project = projectsData.find((item) => item.name === name)

	return (
		<div className='project-container'>
			<div className='image'>
				<img src={project.layout[0].header} alt={project.name} className='project-header' />
			</div>
			<div className='project-text'>
				<h3>About this Project</h3>
				<p>{project.text}</p>
			</div>
			<div>
				<h3>
					{project.name} <span>Gallery</span>
				</h3>
				<Container className='gallery'>
					{project.layout[1].grid.map((item, index) => (
						<div className='gallery-container' key={index}>
							<div className='gallery-item' key={index}>
								<div className='gallery-image'>
									<img
										src={item}
										alt={index}
										onClick={() => {
											handleShow(item)
										}}
									/>
								</div>
							</div>
						</div>
					))}
					{show && (
						<Modal show={show} onHide={handleClose} className='modal'>
							<Modal.Header closeButton onClick={handleClose}>
								<Modal.Title>{project.name}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<span className='modal-img'>
									<img src={img} alt={project.name} />
								</span>
							</Modal.Body>
						</Modal>
					)}
				</Container>
			</div>
		</div>
	)
}

export default Project
