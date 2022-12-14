import React from 'react'
import { Link } from 'react-router-dom'

import building from '../../assets/building-plane.png'

import { MdOutlineFindInPage } from 'react-icons/md'

import './aboutRO.css'

const AboutRO = () => (
	<div className='gpt3__possibility section__padding' id='possibility'>
		<div className='gpt3__possibility-content'>
			<h1 className='gradient__text'>About Red Orchid!</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum
			</p>
			<Link to='/about' className='link-remove'>
				<h4>
					More Information About Us <MdOutlineFindInPage />
				</h4>
			</Link>
		</div>
		<div className='gpt3__possibility-image'>
			<img src={building} alt='possibility' />
		</div>
	</div>
)

export default AboutRO
