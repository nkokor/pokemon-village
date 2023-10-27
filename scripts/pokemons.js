const popplioImage = new Image()
popplioImage.src = './assets/popplio.png'
const popplio = new Sprite({
  position: {
    x: 300,
    y: 150 
  }, 
  image: popplioImage, 
  frames: {
    max: 4
  }
})

popplio.moving = true