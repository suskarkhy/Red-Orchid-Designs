import React from 'react'

import OurService from '../../components/ourService/OurService'
import construction from '../../assets/construction.png'

import { MdOutlineConstruction, MdOutlineFoundation } from 'react-icons/md'
import { FaTruckLoading } from 'react-icons/fa'
import { GrUserWorker } from 'react-icons/gr'

import './ourServices.css'

const servicesData = [
	{
		title: 'Building Contruction',
		text: 'Lorem Ipsum is simply dummy text.',
		icon: <MdOutlineConstruction />,
	},
	{
		title: 'Foundation Work',
		text: 'yelo.',
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

const OurServices = () => (
	<div className='RO__ourServices section__padding'>
		<div className='RO__ourServices-heading'>
			<h1 className='gradient__text'>Our Services</h1>
			<img alt='services' src={construction} />
		</div>
		<div className='RO__ourServices-container'>
			{servicesData.map((item, index) => (
				<OurService title={item.title} text={item.text} icon={item.icon} key={item.title + index} />
			))}
		</div>
	</div>
)

export default OurServices
