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
}

export default createBoard


// createBoard() {
// 	// create grid array
// 	for (let i = 0; i <= this.width - this.cellWidth; i += this.cellWidth) {
// 		const row_arr = []
// 		for (let j = 0; j <= this.height - this.cellHeight; j += this.cellHeight) {
// 			row_arr.push(Math.floor(Math.random() * 2))
// 		}
// 		this.board.push(row_arr)
// 	}
// 	console.log(this.board, "BOARD")
// 
// 	// draw squares for each cell
// 	for (let i = 0; i < board.length; i++) {
// 		for (let j = 0; j < board[i].length; j++) {
// 			ctx.lineWidth = 0.5
// 			if (j == 0) {
// 				console.log("hit")
// 				ctx.rect(i, j, this.cellWidth, this.cellHeight)
// 				ctx.stroke()
// 			} else if (j == 1) {
// 				console.log("hit")
// 				ctx.rect(i, j, this.cellWidth, this.cellHeight)
// 				ctx.fill()
// 			}
// 		}
// 	}
// }
// // find somewhere to put this:
// 
// sendAttbs() {
// 	return {
// 		width: this.cellWidth,
// 		height: this.cellHeight
// 	}
// }
