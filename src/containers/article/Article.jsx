import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, text }) => (
	<div className='article-container'>
		<div className=''>
			<img src={imgUrl} alt='blog_image' />
		</div>
		<div className=''>
			<div>
				<h1>suha</h1>
				<p>{date}</p>
				<h3>{text}</h3>
			</div>
			<p>Check it Out</p>
		</div>
	</div>
)

export default Article
