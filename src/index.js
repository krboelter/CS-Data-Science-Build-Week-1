import './style.css'
import createBoard from './components/createBoard'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const width = 400
const height = 400
canvas.width = width
canvas.height = height


function main() {
	createBoard(ctx, width, height, 20, 20)
}

canvas.addEventListener('click', e => {
	let x = e.offsetX
	let y = e.offsetY
	let params = board.sendAttbs()

	const width = params.width
	const height = params.height

	// index of board row will be the mouse posX / width (possibly need to + 1)
	// column of board will be mouse posY / height (possibly need to + 1)
	// to get center of the cell, when dividing mouse posX / width and posY / height, (assuming you have the right side of cell) subtract half of a cell
	const cir = new Circle(20, 20, 5)
	cir.draw()
})

main()
