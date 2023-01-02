import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Footer, Blog, Possibility, Features, Projects } from './containers'
import { Navbar, About, Project } from './components'

import './App.css'

const App = () => (
	<Router>
		<div className='App'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<Fragment>
							<Blog />
							<Possibility />
							<Features />
						</Fragment>
					}
				/>

				<Route path='/projects' element={<Projects />} />

				<Route path='/projects/:name' element={<Project />} />

				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</div>
	</Router>
)

export default App
