const changeSingleImage = () => {
    const interactiveImage = document.getElementById(`interactive`)
    const singleImage = `images/mobile/image-interactive.jpg`

    if(window.innerWidth <= 640) {
        interactiveImage.src = singleImage
    }
}
window.addEventListener(`load`, changeSingleImage)

const changeImages = () => {
    const imageValues = [ 
        {id: `one`, src:`images/mobile/image-deep-earth.jpg`},
        {id: `two`, src:`images/mobile/image-night-arcade.jpg`},
        {id: `three`, src:`images/mobile/image-soccer-team.jpg`},
        {id: `four`, src:`images/mobile/image-grid.jpg`},
        {id: `five`, src:`images/mobile/image-from-above.jpg`},
        {id: `six`, src:`images/mobile/image-pocket-borealis.jpg`},
        {id: `seven`, src:`images/mobile/image-curiosity.jpg`},
        {id: `eight`, src:`images/mobile/image-fisheye.jpg`},
    ]

    imageValues.forEach(imageValue => {
        const imageIds = document.getElementById(imageValue.id)
        if(window.innerWidth <= 640) {
            imageIds.src = imageValue.src
        }
    })
}
window.addEventListener(`load`, changeImages)

const menuIcon = document.getElementById(`menu`)
const closeIcon = document.getElementById(`close`)
const navigation = document.getElementById(`navigation`)

menuIcon.addEventListener(`click`, () => {
    navigation.style.display = `flex`
})
closeIcon.addEventListener(`click`, () => {
    navigation.style.display = `none`
})