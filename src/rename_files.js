const fs = require('fs')

// rename files in a directory

const dir = './assets/EV/EV-construction'
const files = fs.readdirSync(dir)

files.forEach((file, index) => {
	// rename the file with the index if its an image
	if (file.includes('.JPG') || file.includes('.PNG') || file.includes('.JPEG') || file.includes('.HEIC')) {
		const fileType = file.split('.').pop()
		const newFileName = `${index + 1}.${fileType}`
		fs.renameSync(`${dir}/${file}`, `${dir}/${newFileName}`)
	} else {
		// delete the file if its not an image
		fs.unlinkSync(`${dir}/${file}`)
	}
})
