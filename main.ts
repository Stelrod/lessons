input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 10))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(7 * 9)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 6))
})
