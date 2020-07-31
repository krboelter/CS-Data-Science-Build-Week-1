export let grid;
let color = "black"
let randBlock = 0
const blackBtn = document.querySelector('.black')
const blueBtn = document.querySelector('.blue')
const greenBtn = document.querySelector('.green')
const redBtn = document.querySelector('.red')
const rand = document.querySelector('.randomize')

// setup 2d array
function make2DArray(cols, rows) {
	const board = new Array(cols)
	for (let i = 0; i < board.length; i++) {
		board[i] = new Array(rows)
	}
	return board
}

// set up 2d array with 0's
export function createBoard(ctx, cols, rows, cellWidth, cellHeight) {
	function makeGrid() {
		grid = make2DArray(cols, rows)
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				grid[i][j] = 0
				const x = i * cellWidth
				const y = j * cellHeight

				ctx.lineWidth = 0.5
				ctx.strokeRect(x, y, cellWidth, cellHeight)
			}
		}
	}
	makeGrid()
}

// set up 2d array with random
export function createRandomBoard(ctx, cols, rows, cellWidth, cellHeight) {
	function makeGrid() {
		grid = make2DArray(cols, rows)
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				grid[i][j] = Math.floor(Math.random() * 2)
				const x = i * cellWidth
				const y = j * cellHeight

				ctx.lineWidth = 0.5
				ctx.strokeRect(x, y, cellWidth, cellHeight)
			}
		}
	}
	makeGrid()
}


blackBtn.addEventListener('click', e => {
	color = 'black'
})

blueBtn.addEventListener('click', e => {
	color = 'blue'
})

greenBtn.addEventListener('click', e => {
	color = 'green'
})

redBtn.addEventListener('click', e => {
	color = 'red'
})

export function setup(ctx, cols, rows, cellWidth, cellHeight) {
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			const x = i * cellWidth
			const y = j * cellHeight


			if (grid[i][j] == 1) {
				ctx.fillStyle = `${color}`
				ctx.fillRect(x, y, cellWidth, cellHeight)
			} else if (grid[i][j] == 0) {
				ctx.fillStyle = 'white'
				ctx.fillRect(x, y, cellWidth, cellHeight)
				ctx.strokeRect(x, y, cellWidth, cellHeight)
			}
		}
		
	}
}

// draw black or white square, calculate rules
export function draw(ctx, canvas, cols, rows, cellWidth, cellHeight) {
	// fills the square based on 1 or 0
	setup(ctx, cols, rows, cellWidth, cellHeight)

	const next = make2DArray(cols, rows)

	// implaments rules
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			const state = grid[i][j]

			// evaluates neighbors
			let neighbors = countNeighbors(grid, cols, rows, i, j)

			if (state == 0 && neighbors == 3) {
				next[i][j] = 1
			} else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
				next[i][j] = 0
			} else { 
				next[i][j] = state
			}
		}
	}
	grid = next
}


function countNeighbors(grid, cols, rows, x, y) {
	let sum = 0
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {

			let col = (x + i + cols) % cols
			let row = (y + j + rows) % rows

			sum += grid[col][row]
		}
	}

	sum -= grid[x][y]
	return sum
}


export default createBoard

