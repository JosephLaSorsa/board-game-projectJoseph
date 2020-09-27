input.onButtonPressed(Button.A, function () {
    Player = Player + randint(1, 6)
    basic.showString("" + (Player))
    basic.pause(1000)
    basic.clearScreen()
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
    } else if (Player == 5) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 7) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 8) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 8) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (false) {
    	
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Points))
})
let Points = 0
let Player = 0
Player = 1
basic.forever(function () {
    if (Player == 10) {
        basic.showString("You got a point")
        Points += 1
    } else if (Player > 10) {
        Points += -1
    }
})
