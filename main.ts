let Pas = 0
input.onButtonPressed(Button.A, function () {
    Pas = 0
    basic.showNumber(Pas)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Pas / 300 * 60)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Pas)
})
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        Pas += 1
    }
})
