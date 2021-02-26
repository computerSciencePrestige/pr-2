input.onButtonPressed(Button.A, function () {
    amount = 1
})
input.onButtonPressed(Button.B, function () {
    amount = -1
})
input.onGesture(Gesture.Shake, function () {
    steps += amount
    basic.showNumber(steps)
})
let amount = 0
let steps = 0
steps = 0
amount = 1
