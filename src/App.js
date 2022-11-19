import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Footer, Blog, Possibility, Features, Projects } from './containers'
import { Navbar } from './components'

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
			</Routes>
			<Footer />
		</div>
	</Router>
)

export default App
