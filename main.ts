input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 <= 63; index2++) {
        for (let index = 0; index <= 127; index++) {
            kitronik_VIEW128x64.setPixel(index, index2)
        }
    }
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    kitronik_VIEW128x64.clear()
    for (let index2 = 0; index2 <= 63; index2++) {
        for (let index = 0; index <= 127; index++) {
            kitronik_VIEW128x64.setPixelbuffer(index, index2)
        }
    }
    kitronik_VIEW128x64.refresh()
    basic.showIcon(IconNames.Meh)
})
kitronik_VIEW128x64.clear()
basic.forever(function () {
	
})
