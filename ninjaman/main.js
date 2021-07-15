const world = [
  [1, 1, 1, 1, 1],
  [1, 0, 2, 3, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 2, 3, 1],
  [1, 0, 2, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 3, 2, 2, 1],
  [1, 0, 3, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 2, 3, 1],
  [1, 1, 1, 1, 1]
]

const worldDict = {
  0: 'blank',
  1: 'wall',
  2: 'sushi',
  3: 'onigiri'
}
function drawWorld () {
  output = ''

  for (let row = 0; row < world.length; row++) {
    output += "<div class = 'row'>"
    for (let x = 0; x < world[row].length; x++) {
      output += "<div class = '" + worldDict[world[row][x]] + "'></div>"
    }
    output += '</div>'
  }
  document.getElementById('world').innerHTML = output
}
drawWorld()

const ninjaman = {
  x: 1,
  y: 1
}

function drawNinjaman () {
  document.getElementById('ninjaman').style.left =
      ninjaman.x * 40 + 'px'
  document.getElementById('ninjaman').style.top =
      ninjaman.y * 40 + 'px'
}
drawNinjaman()

let score = 0
document.onkeydown = function (e) {
  if (e.keyCode == 37) { // left
    if (world[ninjaman.y][ninjaman.x - 1] != 1) {
      ninjaman.x--
      if (world[ninjaman.y][ninjaman.x] == 2 ||
        world[ninjaman.y][ninjaman.x] == 3) {
        score += 1
      }
    }
  }
  if (e.keyCode == 39) {
    if (world[ninjaman.y][ninjaman.x + 1] != 1) {
      ninjaman.x++
      if (world[ninjaman.y][ninjaman.x] == 2 ||
        world[ninjaman.y][ninjaman.x] == 3) {
        score += 1
      }
    } // right
  }
  if (e.keyCode == 40) {
    if (world[ninjaman.y + 1][ninjaman.x] != 1) {
      ninjaman.y++
      if (world[ninjaman.y][ninjaman.x] == 2 ||
        world[ninjaman.y][ninjaman.x] == 3) {
        score += 1
      }
    }// down
  }
  if (e.keyCode == 38) {
    if (world[ninjaman.y - 1][ninjaman.x] != 1) {
      ninjaman.y--
      if (world[ninjaman.y][ninjaman.x] == 2 ||
        world[ninjaman.y][ninjaman.x] == 3) {
        score += 1
      }
    } // up
  }

  world[ninjaman.y][ninjaman.x] = 0
  document.getElementById('score').innerHTML = score
  drawNinjaman()
  drawWorld()
}
