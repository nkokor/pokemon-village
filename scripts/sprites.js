class Sprite {
  constructor({
    position,
    image,
    frames = {
      max: 1,
    }
  }) {
    this.position = position
    this.image = image
    this.frames = {...frames, value: 0, framesElapsed: 0}
    //images might take some time to load
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max
      this.height = this.image.height
    }
    this.moving = false
  }
  draw() {
    context.drawImage(
      this.image, 
      this.frames.value * this.width, //cropping starting point from x
      0, //cropping starting point from y
      this.image.width / this.frames.max, //cropping lenght for x
      this.image.height, //cropping length for y
      this.position.x, //position x
      this.position.y, //position y
      this.image.width / this.frames.max, //actual width of the image being rendered
      this.image.height, //actual height of the image being rendered
    )
    if(this.moving) {
      if(this.frames.max > 1) {
        this.frames.framesElapsed += 1
      }
      //change the image on every 10th animation frame to "slow down" the animation
      if(this.frames.framesElapsed % 10 === 0) {
        if(this.frames.value < this.frames.max - 1) {
          this.frames.value += 1
        } else {
          this.frames.value = 0
        }
      }
    }
  }
}

const offset = {
  x: -5600,
  y: -1570
}

//creating world map
const mapImage = new Image()
mapImage.src = './assets/pallet-town.png'
const map = new Sprite({
  position: {
    x: offset.x,
    y: offset.y 
  }, 
  image: mapImage
})

//creating player
const playerImageDown = new Image()
playerImageDown.src = './assets/player-down.png'
const playerImageLeft = new Image()
playerImageLeft.src = './assets/player-left.png'
const playerImageUp = new Image()
playerImageUp.src = './assets/player-up.png'
const playerImageRight = new Image()
playerImageRight.src = './assets/player-right.png'
const player = new Sprite({
  position: {
    x: canvas.width / 2 - playerImageDown.width / 6,
    y: canvas.height / 2 - playerImageDown.height / 2
  },
  image: playerImageDown,
  frames: {
    max: 4
  }
})

const pikachuImageDown = new Image()
pikachuImageDown.src = './assets/pikachu-down.png'
const pikachuImageLeft = new Image()
pikachuImageLeft.src = './assets/pikachu-left.png'
const pikachuImageUp = new Image()
pikachuImageUp.src = './assets/pikachu-up.png'
const pikachuImageRight = new Image()
pikachuImageRight.src = './assets/pikachu-right.png'
const pikachu = new Sprite({
  position: {
    x: 520,
    y: 285
  },
  image: pikachuImageDown,
  frames: {
    max: 4,
    value: 1
  }
})

//creating foreground
const foregroundMapImage = new Image()
foregroundMapImage.src = './assets/foreground-map.png'
const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y 
  },
  image: foregroundMapImage
})

