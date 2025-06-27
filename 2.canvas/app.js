let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight;

let van = canvas.getContext("2d")

// line
van.beginPath()
// van.moveTo(x,y)
van.moveTo(200,100)
van.lineTo(900,100);
van.stroke() 