function createBoard(ctx, width, height, cols, rows) {
	const cellWidth = width/cols
	const cellHeight = width/rows

	// setup 2d array
	function make2DArray() {
		const board = new Array(cols)
		for (let i = 0; i < board.length; i++) {
			board[i] = new Array(rows)
		}
		return board
	}

	let grid;

	// makes the grid
	function makeGrid() {
 		grid = make2DArray(cols, rows)
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				grid[i][j] = Math.floor(Math.random() * 2)
			}
		}
	}
	makeGrid()

	function draw() {
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				const x = i * cellWidth
				const y = j * cellHeight

				if (grid[i][j] == 1) {
					ctx.fill()
					ctx.stroke()
					ctx.rect(x, y, cellWidth, cellHeight)
				}
			}
		}


		const next = make2DArray(cols, rows)

		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				const state = grid[i][j]

				// count neighbors
				// for the edges
				if (i == 0 || i == cols - 1 || j == 0 || j == cols - 1) {
					next[i][j] = state
				} else {

					let sum = 0
					let neighbors = countNeighbors(grid, i, j)

					if (state == 0 && neighbors == 3) {
						next[i][j] = 1
					} else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
						next[i][j] = 0
					} else { 
						next[i][j] = state
					}
				}
			}
		}

		grid = next
	}

	function loop() {
		draw()
		requestAnimationFrame(loop)
	}

	function countNeighbors(grid, x, y) {
		let sum = 0
		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				sum += grid[x + i][y + j]
			}
		}

		sum -= grid[x][y]
		return sum
	}

	// loop()
	draw()
}

export default createBoard

