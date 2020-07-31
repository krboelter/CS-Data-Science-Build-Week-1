function editGrid(ctx, canvas, grid) {
	canvas.addEventListener('click', e => {
		console.log(e.offsetX, e.offsetY)
	})
}

export {editGrid}
