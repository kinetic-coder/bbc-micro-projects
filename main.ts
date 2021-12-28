input.onGesture(Gesture.TiltLeft, function () {
    basic.showString(">")
    radio.sendString(">")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("STOP")
    radio.sendString("STOP")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("GO")
    radio.sendString("GO")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("<")
    radio.sendString("<")
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(50)
basic.forever(function () {
	
})
