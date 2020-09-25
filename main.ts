input.onButtonPressed(Button.A, function () {
    Player = Player + randint(1, 5)
    basic.showString("" + (Player))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (Player == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 2) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 4) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 5) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    Player = 0
})
let Player = 0
Player = 0
basic.forever(function () {
	
})
