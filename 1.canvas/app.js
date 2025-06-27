let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight;

let van = canvas.getContext("2d")

// (x,y,width,height)

van.fillRect(100,100,100,100)
van.fillRect(200,400,100,100)
van.fillRect(800,100,100,100)