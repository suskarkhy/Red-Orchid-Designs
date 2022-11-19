import React from 'react'

import Feature from '../../components/feature/Feature'
import construction from '../../assets/construction.png'

import { MdOutlineConstruction, MdOutlineFoundation } from 'react-icons/md'
import { FaTruckLoading } from 'react-icons/fa'
import { GrUserWorker } from 'react-icons/gr'

import './features.css'

const featuresData = [
	{
		title: 'Building Contruction',
		text: 'Lorem Ipsum is simply dummy text.',
		icon: <MdOutlineConstruction />,
	},
	{
		title: 'Foundation Work',
		text: 'Lorem Ipsum is simply dummy text.',
		icon: <MdOutlineFoundation />,
	},
	{
		title: 'Tear-downs & Haul-offs',
		text: 'Lorem Ipsum is simply dummy text.',
		icon: <FaTruckLoading />,
	},
	{
		title: 'Site Management',
		text: 'Lorem Ipsum is simply dummy text.',
		icon: <GrUserWorker />,
	},
]

const Features = () => (
	<div className='gpt3__features section__padding'>
		<div className='gpt3__features-heading'>
			<h1 className='gradient__text'>Our Services</h1>
			<img alt='services' src={construction} />
		</div>
		<div className='gpt3__features-container'>
			{featuresData.map((item, index) => (
				<Feature title={item.title} text={item.text} icon={item.icon} key={item.title + index} />
			))}
		</div>
	</div>
)

export default Features
