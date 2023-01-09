const shapesInLine = document.getElementById('shapes-in-line')
const shapesCross = document.getElementById('shapes-cross')
const shapes = document.querySelectorAll('.PS-shape')

const animateShapes = () => {
    
    const rotateClockwise = [
        { transform: 'rotate(360deg)' }
    ]

    const scaleUpDown = [
        {scale: 1},
        {scale: 1.25},
        {scale: 1}
    ]

    const rotateCounterClockwise = [
        { transform: 'rotate(-360deg)' }
    ]

    const options = {
        duration: 1000,
        iterations: 1,
        easing: 'ease-in-out'
      }

    shapesCross.animate(rotateClockwise, options)
    shapesCross.animate(scaleUpDown, options)
    shapes.forEach(shape => shape.animate(rotateCounterClockwise, options))
}
 
shapesCross.addEventListener('mouseenter', () => {
    animateShapes()
})
