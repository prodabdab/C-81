canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

color="red";
ctx.beginPath();
ctx.strokeStlye=color;
ctx.lineWidth=5;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",m);
function m(e) {
    color=document.getElementById("inputt").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
circle (mouse_x,mouse_y);
}
function circle (mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStlye=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
    ctx.stroke();
}
function onwww() 
{ ctx.clearRect(0, 0, canvas.width, canvas.height); }