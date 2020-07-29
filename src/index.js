import './style.css'
import createBoard from './components/createBoard'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const width = 600
const height = 600
canvas.width = width
canvas.height = height


function main() {
	createBoard(ctx, canvas, width, height, 60, 60)
}


main()
