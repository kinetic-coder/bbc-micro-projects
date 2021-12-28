input.onGesture(Gesture.FreeFall, function () {
    basic.showString("GO")
    radio.sendString("MOVE-FORWARD")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("L")
    radio.sendString("TURN-LEFT")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("STOP")
    radio.sendString("STOP")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("R")
    radio.sendString("TURN-RIGHT")
})
radio.setGroup(50)
basic.forever(function () {
	
})
