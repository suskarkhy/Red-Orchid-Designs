import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

const WhatGPT3 = () => (
	<div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
		<div className='gpt3__whatgpt3-heading'>
			<h1 className='gradient__text'>Our Services</h1>
		</div>
		<div className='gpt3__whatgpt3-container'>
			<Feature title='Building Contruction' text='Lorem Ipsum is simply dummy text' />
			<Feature title='Foundation Work' text='Lorem Ipsum is simply dummy text.' />
			<Feature title='Tear-downs & Haul-offs' text='Lorem Ipsum is simply dummy text.' />
			<Feature title='Site Management' text='Lorem Ipsum is simply dummy text.' />
		</div>
	</div>
)

export default WhatGPT3
