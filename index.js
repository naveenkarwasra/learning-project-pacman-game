const width = 28
const grid = document.querySelector(".grid")
let scoreDIsplay = document.querySelector("#score")
let score = 0
let squares = []
// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]
//create board
function createBoard() {
    for (let i = 0; i < layout.length; i++) {        
        const square = document.createElement("div")        
        grid.appendChild(square)        
        squares.push(square)       

        //create grid
        if (layout[i] === 0) {
            squares[i].classList.add("pac-dot")           

        }
        else if (layout[i] === 1) {
           squares[i].classList.add("wall")
        }
         else if (layout[i] === 2) {
                squares[i].classList.add("ghost-lair")
       } else if (layout[i] === 3) {
            squares[i].classList.add("power-pellet")
        }

    }
}
createBoard()

//pacman current index
let pacmanCurrentIndex = 494
squares[pacmanCurrentIndex].classList.add("pacman-forward")

// adding control to pacman
//up key - 38
// left - 37
// right - 39
//down - 40

function control(e) {
    squares[pacmanCurrentIndex].classList.remove("pacman-forward", "pacman-backward","pacman-upward", "pacman-downward")   
    
    switch (e.keyCode) {
        case 40:
            if (
                !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") &&
                !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
                pacmanCurrentIndex + width < width * width
            )

                pacmanCurrentIndex += width
                squares[pacmanCurrentIndex].classList.add("pacman-downward")
            break

        case 38:
            if (
                !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair") &&
                !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
                pacmanCurrentIndex - width >= 0
            )

                pacmanCurrentIndex -= width
                squares[pacmanCurrentIndex].classList.add("pacman-upward")
            break

        case 37:      
            if (
                !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair") &&
                !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
                pacmanCurrentIndex % width !== 0
            )

                pacmanCurrentIndex -= 1 
            if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }
            squares[pacmanCurrentIndex].classList.add("pacman-backward")
            break

        case 39:
            if (
                !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair") &&
                !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
                pacmanCurrentIndex % width < width - 1
            )
                pacmanCurrentIndex += 1
            if (pacmanCurrentIndex === 391) {
                pacmanCurrentIndex = 364
            }
            squares[pacmanCurrentIndex].classList.add("pacman-forward")
            break
    }    
    pacDotEaten()
    powerPelletEaten()
    gameWin()
    gameOver()    
}

document.addEventListener("keydown", control)


//eating pac dotes
function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
        squares[pacmanCurrentIndex].classList.remove("pac-dot")
        score++
        scoreDIsplay.innerHTML = score
    }
}

//eating power pellet
function powerPelletEaten() {    
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
        squares[pacmanCurrentIndex].classList.remove("power-pellet")
        score += 10        
        ghosts.forEach(ghost => { ghost.isScared = true })        
        setTimeout(ghostUnScared, 10000)
    }
}

//function for set timeout
function ghostUnScared() {
    ghosts.forEach(ghost => { ghost.isScared = false })
}


//creating ghost
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}
let ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 378, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 500)
]

//drawing ghost onto grid
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add("ghost")
})

//moving ghost
ghosts.forEach(ghost => moveGhost(ghost))
function moveGhost(ghost) {
    const directions = [-1, 1, -width, width] 
    let direction = directions[Math.floor(Math.random() * directions.length)] 
    ghost.timerId = setInterval(function () {
        if (
            !squares[ghost.currentIndex + direction].classList.contains("wall") && //prevent ghost onto wall
            !squares[ghost.currentIndex + direction].classList.contains("ghost") // prevent ghost to another one
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.className) 
            squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost")
            ghost.currentIndex += direction 
            squares[ghost.currentIndex].classList.add(ghost.className) 
            squares[ghost.currentIndex].classList.add("ghost")
        } else { direction = directions[Math.floor(Math.random() * directions.length)] }

        //changing style of scared ghost
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add("scared-ghost")
        }     
        if (
            ghost.isScared &&
            squares[ghost.currentIndex].classList.contains("pacman-forward", "pacman-backward","pacman-upward", "pacman-downward")

        ) {
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
            ghost.currentIndex = ghost.startIndex
            score += 100
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
        }
        gameOver()

    }, ghost.speed)
}

// check for game over
function gameOver() {    
    if (
        squares[pacmanCurrentIndex].classList.contains("ghost") &&
        !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {        
        ghosts.forEach(ghost => clearInterval(ghost.timerId))        
        document.removeEventListener("keydown", control)        
        scoreDIsplay.innerHTML = "you Lose"
    }
}

//check for win
function gameWin() {
    if (score === 120) {       
        ghosts.forEach(ghost => clearInterval(ghost.timerId))        
        document.removeEventListener("keydown", control)        
        scoreDIsplay.innerHTML = "You Won"
    }
}