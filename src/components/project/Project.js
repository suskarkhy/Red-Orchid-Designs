import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import './project.css'

import projectsData from './ProjectData'

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

	const project = projectsData.find((item) => item.name === name)

	return (
		<div className='project-container'>
			<div className='image'>
				<img src={project.layout[0].header} alt={project.name} className='project-header' />
			</div>
			<div className='project-text'>
				<h2 className='gradient__text'>About this Project</h2>
				<p>{project.text}</p>
			</div>
			<div className='gallery-container'>
				<h2
					className='gradient__text'
					style={{
						textAlign: 'center',
					}}
				>
					{project.name} Gallery
				</h2>
				<div className='gallery'>
					{project.layout[1].grid.map((item, index) => (
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
				</div>
			</div>
		</div>
	)
}

export default Project
