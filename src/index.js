import './style.css'
import {grid, createBoard, createRandomBoard, setup, draw} from './components/createBoard'

const canvas = document.querySelector('#canvas')
const startGame = document.querySelector('.start-game')
const stopGame = document.querySelector('.stop-game')
const rand = document.querySelector('.randomize')
const clear = document.querySelector('.clear')
const step = document.querySelector('.step')

const ctx = canvas.getContext('2d')
const width = 400
const height = 400
const rows = 30
const cols = 30
const cellWidth = width / rows
const cellHeight = height / cols
let loopActive = false
let random = false
canvas.width = width
canvas.height = height


// clear canvas
clear.addEventListener('click', e => {
	stop()
	ctx.clearRect(0, 0, width, height)
	createBoard(ctx, cols, rows, cellWidth, cellHeight)
})

// create the board
createBoard(ctx, cols, rows, cellWidth, cellHeight)

// create random board
rand.addEventListener('click', e=> {
	createRandomBoard(ctx, cols, rows, cellWidth, cellHeight)
	draw(ctx, canvas, cols, rows, cellWidth, cellHeight)
})

step.addEventListener('click', e => {
	setup(ctx, cols, rows, cellWidth, cellHeight)
	draw(ctx, canvas, cols, rows, cellWidth, cellHeight)
})

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
	let myX = Math.floor(e.offsetX / cellWidth)
	let myY = Math.floor(e.offsetY / cellHeight)
	console.log(`x: ${myX}, y: ${myY}`)

	grid[myX][myY] = 1
	setup(ctx, cols, rows, cellWidth, cellHeight)
})




