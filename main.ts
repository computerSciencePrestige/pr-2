input.onButtonPressed(Button.A, function () {
    counter += 1
    if (counter > 10) {
        counter = 0
    }
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    counter = 0
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    if (counter < 0) {
        counter = 10
    }
    basic.showNumber(counter)
})
let counter = 0
counter = 10
basic.showNumber(counter)
basic.forever(function () {
	
})
