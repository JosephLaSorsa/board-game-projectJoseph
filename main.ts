input.onButtonPressed(Button.A, function () {
    Player = Player + randint(1, 6)
})
input.onButtonPressed(Button.B, function () {
    if (Player == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
        Player = 0
    } else if (Player == 2) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 4) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player > 5) {
        basic.showString("You lost")
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    Player = 0
})
let Player = 0
Player = 0
basic.forever(function () {
    if (Player == 5) {
        basic.showString("You won")
    }
})
