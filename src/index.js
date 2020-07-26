import './style.css'


window.addEventListener('DOMContentLoaded', (e) => {

	const canvas = document.querySelector('#canvas')
	const ctx = canvas.getContext('2d')

	const width = 400
	const height = 400
	canvas.width = width
	canvas.height = height


	class Board {
		constructor(width, height, rows, cols) {
			this.width = width
			this.height = height
			this.rows = rows
			this.cols = cols
			this.board = []
			this.cellWidth = this.width/this.rows
			this.cellHeight = this.height/this.cols
		}


		createBoard() {
			for (let i = 0; i <= this.width - this.cellWidth; i += this.cellWidth) {
				const row_arr = []
				for (let j = 0; j <= this.height - this.cellHeight; j += this.cellHeight) {
					// add an empty square for each row
					ctx.lineWidth = 0.5
					ctx.strokeRect(i, j, this.cellWidth, this.cellHeight)
					
					// add a row for every loop
					row_arr.push(0)
				}

				this.board.push(row_arr)
			}
			console.log(this.board, "BOARD")
		}

		
		sendAttbs() {
			return {
				width: this.cellWidth,
				height: this.cellHeight
			}
		}

	}


	class Circle {
		constructor(posX, posY, radius) {
			this.posX = posX
			this.posY = posY
			this.radius = radius
		}
	}

	Circle.prototype.draw = () => {
		ctx.arc(this.posX, this.posY, radius, 0, (Math.PI * 2), true)
		// move 0, 0 of circle to the center
	}

	Circle.prototype.setToCell = (posX, posY) => {
	}


	const board = new Board(width, height, 30, 30)
	board.createBoard()

	canvas.addEventListener('click', e => {
		let x = e.offsetX
		let y = e.offsetY
		let params = board.sendAttbs()

		const width = params.width
		const height = params.height

		// index of board row will be the mouse posX / width (possibly need to + 1)
		if (x >= width / x) {
			console.log(width / x)
		}
		// column of board will be mouse posY / height (possibly need to + 1)
		// to get center of the cell, when dividing mouse posX / width and posY / height, (assuming you have the right side of cell) subtract half of a cell
		const cir = new Circle()
	})

})
