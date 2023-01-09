import React from 'react'
import './ourService.css'

const OurService = ({ title, text, icon }) => (
	<div className='RO__ourServices-container__ourService'>
		<h5>{icon}</h5>
		<div className='RO__ourServices-container__ourService-title'>
			<h1 className='gradient__text'>{title}</h1>
		</div>
		<div className='RO__ourServices-container_ourService-text'>
			<p>{text}</p>
		</div>
	</div>
)

export default OurService
