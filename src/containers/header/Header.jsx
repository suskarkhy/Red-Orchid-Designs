import React from 'react'
import building from '../../assets/building-transBR.png'
import './header.css'

const Header = () => (
	<div className='gpt3__header section__padding' id='home'>
		<div className='gpt3__header-content'>
			<h1 className='gradient__text'>visualize your imagination</h1>
			<p>We help in creating designs like you have never imagined. check out our work and see for yourself! </p>
		</div>
		<div className='gpt3__header-image'>
			<img alt='building' src={building} />
		</div>
	</div>
)

export default Header
