//canvas setup
const canvas = document.getElementById('game-canvas')
canvas.width = 1024
canvas.height = 576
const context = canvas.getContext('2d')
context.fillStyle = 'white' 
context.fillRect(0, 0, canvas.width, canvas.height)

//map creation
const map = new Image()
map.src = './assets/world-map.png'

//player creation
const player = new Image()
player.src = './assets/player-down.png'
  
map.onload = () => {

  //map rendering
  context.drawImage(map, -6500, -1850)

  //player rendering
  context.drawImage(
    player, 
    0, //cropping starting point from x
    0, //cropping starting point from y
    player.width / 4, //cropping lenght for x
    player.height, //cropping length for y
    canvas.width / 2 - player.width / 4, //position x
    canvas.height / 2 - player.height / 2, //position y
    player.width / 4, //actual width of the image being rendered
    player.height //actual height of the image being rendered
    )
}
