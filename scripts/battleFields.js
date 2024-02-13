class BattleField {
  constructor({
    position,
    width,
    height
  }) {
    this.position = position,
    this.width = width
    this.height = height
  }
  draw() {
    context.fillStyle = 'rgba(0, 255, 0, 1)'
    context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

let battleField1 = new BattleField({
  position: {
    x: 155,
    y: 460 
  }, 
  width: 100,
  height: 56
})

let battleField2 = new BattleField({
  position: {
    x: -635,
    y: 125 
  },
  width: 100,
  height: 56
})

let battleField3 = new BattleField({
  position: {
    x: -1425,
    y: 1020 
  },
  width: 100,
  height: 56
})

let battleField4 = new BattleField({
  position: {
    x: -1785,
    y: 400 
  }, 
  width: 56,
  height: 100
})

let battleField5 = new BattleField({
  position: {
    x: -2595,
    y: 190 
  }, 
  width: 100,
  height: 56
})