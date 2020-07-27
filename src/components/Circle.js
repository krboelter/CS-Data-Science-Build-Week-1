class Circle {
	constructor(posX, posY, radius) {
		this.posX = posX
		this.posY = posY
		this.radius = radius
	}

	draw() {
		ctx.arc(this.posX, this.posY, this.radius, 0, (Math.PI * 2), true)
		ctx.fill()
		// move 0, 0 of circle to the center
	}
}
