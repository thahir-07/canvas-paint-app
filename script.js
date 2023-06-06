/**@type {HTMLCanvasElement} */
const canvas=document.getElementById('canvas')
console.log(canvas)
const ctx=canvas.getContext('2d')
var isDrawing=false

canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true
})
canvas.addEventListener('mousemove',(e)=>{
    if(!isDrawing) return
   ctx.lineWidth=document.getElementById('stroke').value
   ctx.strokeStyle=document.getElementById('color').value
   ctx.lineTo(e.offsetX,e.offsetY)
   ctx.stroke()
   ctx.beginPath()
   ctx.moveTo(e.offsetX,e.offsetY)
   

})
canvas.addEventListener('mouseup',(e)=>{
   isDrawing=false
   ctx.beginPath()
})
canvas.addEventListener('mouseleave',(e)=>{
    isDrawing=false
    ctx.beginPath()
})
const button=document.getElementById('clear')
button.addEventListener('click',(e)=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
})
