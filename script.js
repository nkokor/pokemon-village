//canvas setup
const canvas = document.getElementById('game-canvas')
const context = canvas.getContext('2d')
context.fillStyle = 'white' 
context.fillRect(0, 0, canvas.width, canvas.height)

//map rendering
const worldMap = new Image()
worldMap.src = './assets/pallet-town.png'
worldMap.onload = () => {
  context.drawImage(worldMap, -1100, -280)
}