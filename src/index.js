import './style.css'

let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

let width = 400
let height = 400
canvas.width = width
canvas.height = height

// width/height in pixels
function draw_grid(width, height, rows, cols) {
	let r = width / rows
	let c = height / cols

	// make rows an array of 1's and 0's
	let board = []
	// use rows for how many indicies to make
	// use collumns for how many arrays to make
	// fill them all with 0's
	// if it has a 1 in the position, that cell needs to be filled in
	
	// fill in the cell by taking the index of that cell times r to that number plus r
	// do the same for columns
	console.log(`Rows: ${r}, Columns: ${c}`)

	for (let i = 0; i <= width - r; i += r) {
		let row_arr = []
		for (let j = 0; j <= height - c; j += c) {
			// add an empty square for each row
			ctx.strokeRect(i, j, r, c)
			
			// add a row for every loop
			row_arr.push(0)
		}

		board.push(row_arr)
	}
	console.log(board)
	ctx.lineWidth = 0.5
	ctx.stroke()
}

draw_grid(width, height, 30, 30)
