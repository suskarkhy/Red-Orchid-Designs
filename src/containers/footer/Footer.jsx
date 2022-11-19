import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import logo from '../../assets/RO-logo-transBR.png'
import './footer.css'

const Footer = () => (
	<div className='gradient__bg'>
		<div className='gpt3__footer section__padding'>
			<div className='gpt3__footer-heading'>
				<div className='gpt3__footer-links_logo'>
					<img alt='Red Orchid Designs' src={logo} />
				</div>
				<div className='get-in-touch'>
					<h1>
						Get in
						<a href='https://wa.me/message/OE3JFQ4EXCRVG1' target='_blank' rel='noopener noreferrer' title='click me'>
							{' '}
							Touch{' '}
						</a>
					</h1>
					<div className='icons-div'>
						<div className='icons'>
							<a href='https://www.facebook.com/red.orchid.20' target='_blank' rel='noopener noreferrer' title='Facebook'>
								{' '}
								<AiOutlineFacebook size={27} />{' '}
							</a>
							<a href='https://wa.me/message/OE3JFQ4EXCRVG1' target='_blank' rel='noopener noreferrer' title='Instagram'>
								{' '}
								<AiOutlineInstagram size={27} />{' '}
							</a>
							<a href='tel:07502000201' target='_blank' rel='noopener noreferrer' title='Whatsapp'>
								{' '}
								<AiOutlineWhatsApp size={27} />{' '}
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='gpt3__footer-links'>
				<div className='gpt3__footer-links_div'>
					<a href='https://goo.gl/maps/rpCuFUf6ThNJoNqE6' target='_blank' rel='noopener noreferrer' title='location'>
						<p>Star Towers - Building B - 3rd Floor - apartment 12</p>
					</a>
					<a href='tel:07502000201' target='_blank' rel='noopener noreferrer' title='phone number'>
						<p>+964 750 200 0201</p>
					</a>
					<a href='mailto:redorchid1221@gmail.com' rel='noopener noreferrer' title='email'>
						<p>redorchid1221@gmail.com</p>
					</a>
				</div>
			</div>

			<div className='gpt3__footer-copyright'>
				<p>@2022 Red Orchid. All rights reserved.</p>
			</div>
		</div>
	</div>
)

export default Footer
