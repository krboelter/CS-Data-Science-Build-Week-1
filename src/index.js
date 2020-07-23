import './style.css'

let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

let width = 400
let height = 400
canvas.width = width
canvas.height = height



// get the width of the canvas, divide it into even spaces (and height for rows)
// number the arrays as 'cells'
// get the cells using 2 arrays (width, height)

// width/height in pixels
function draw_grid(width, height, rows, cols) {
	let r = width / rows
	let c = height / cols

	for (let i = 0; i <= width; i += r) {
		ctx.moveTo(i, 0)
		ctx.lineTo(i, height)
		for (let j = 0; j <= height; j += c) {
			ctx.moveTo(0, j)
			ctx.lineTo(width, j)
		}
	}
	ctx.lineWidth = 0.5
	ctx.stroke()
}

draw_grid(width, height, 30, 30)
