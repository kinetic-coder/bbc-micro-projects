input.onButtonPressed(Button.A, function () {
    radio.sendString("G")
    basic.showString("GO")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("<")
    basic.showString("<")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("STOP")
    basic.showString("S")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString(">")
    radio.sendString(">")
})
radio.setGroup(50)
basic.forever(function () {
    radio.sendString("" + (input.acceleration(Dimension.X)))
    radio.sendString("" + (input.acceleration(Dimension.Y)))
    basic.showString("" + (input.acceleration(Dimension.X)))
    basic.showString("" + (input.acceleration(Dimension.Y)))
})
