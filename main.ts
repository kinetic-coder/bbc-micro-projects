input.onGesture(Gesture.FreeFall, function () {
    basic.showString("GO")
    radio.sendString("MOVE-FORWARD")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("L")
    radio.sendString("TURN-LEFT")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("STOP")
    radio.sendString("STOP")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("R")
    radio.sendString("TURN-RIGHT")
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(50)
basic.forever(function () {
	
})
