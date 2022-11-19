import React from 'react'
import './feature.css'

const Feature = ({ title, text, icon }) => (
	<div className='gpt3__features-container__feature'>
		<h5>{icon}</h5>
		<div className='gpt3__features-container__feature-title'>
			<h1 className='gradient__text'>{title}</h1>
		</div>
		<div className='gpt3__features-container_feature-text'>
			<p>{text}</p>
		</div>
	</div>
)

export default Feature
