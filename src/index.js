import './style.css'
import {grid, createBoard, draw} from './components/createBoard'

const canvas = document.querySelector('#canvas')
const startGame = document.querySelector('.start-game')
const stopGame = document.querySelector('.stop-game')

const ctx = canvas.getContext('2d')
const width = 400
const height = 400
const rows = 60
const cols = 60
const cellWidth = width / rows
const cellHeight = height / cols
let loopActive = false
canvas.width = width
canvas.height = height


// create the board
createBoard(ctx, cols, rows, cellWidth, cellHeight)

// buttons to start/stop the animation frame
startGame.addEventListener('click', e => {
	loop()
})

stopGame.addEventListener('click', e => {
	stop()
})

let requestId;
function loop(time) {
	requestId = undefined
	draw(ctx, canvas, cols, rows, cellWidth, cellHeight)
	start()
}

function start() {
	if (!requestId) {
		requestId = window.requestAnimationFrame(loop)
	}
}

function stop() {
	if (requestId) {
		window.cancelAnimationFrame(requestId)
		requestId = undefined
	}
}

// add custom shapes to the board
canvas.addEventListener('click', e => {
	let myX = Math.floor(e.offsetX / cellWidth) - 1
	let myY = Math.floor(e.offsetY / cellHeight) - 1
	console.log(`x: ${myX}, y: ${myY}`)
	console.log(grid)

	grid[myX][myY] = 1
})




