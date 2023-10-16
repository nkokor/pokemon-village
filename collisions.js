class CollisionBlock {
  static dimension = 56
  constructor({
    position
  }) {
    this.position = position,
    this.width = CollisionBlock.dimension,
    this.height = CollisionBlock.dimension
  }
  draw() {
    context.fillStyle = 'rgba(255, 0, 0, 0)'
    context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

//creating a border map from an array of blocks
// 140 was the width of the map in Tiled
const borderMap = []
for(let i = 0; i < borderBlocks.length; i += 140) {
  borderMap.push(borderBlocks.slice(i, i + 140))
}

const collisionBlocks = []
borderMap.forEach((row, i) => {
  row.forEach((item, j) => {
    if(item === 1432) {
      collisionBlocks.push(new CollisionBlock({
        position: {
          x: j * CollisionBlock.dimension + offset.x,
          y: i * CollisionBlock.dimension + offset.y
        }
      }))
    }
  })
})