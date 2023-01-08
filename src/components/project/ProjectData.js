import images from './imports'

const projectsData = [
	{
		name: 'English Village',
		layout: [
			{
				header: images.EV.header,
			},
			{
				grid: [
					images.EV.grid[0],
					images.EV.grid[1],
					images.EV.grid[2],
					images.EV.grid[3],
					images.EV.grid[4],
					images.EV.grid[5],
					images.EV.grid[6],
					images.EV.grid[7],
					images.EV.grid[8],
					images.EV.grid[9],
					images.EV.grid[10],
					images.EV.grid[11],
				],
			},
		],
		text: 'This project was done in english village. Check out our 3D designs as well as the the images of the construction process.',
	},
	{
		name: 'Slava',
		layout: [
			{
				header: '', // image for the header
			},
			{
				grid: [], // images for the body
			},
		],
		text: 'project was done in slava.',
	},
	{
		name: 'Apartment',
		layout: [
			{
				header: '', // image for the header
			},
			{
				grid: [], // images for the body
			},
		],
		text: 'project was done in this place.',
	},
]

export default projectsData
