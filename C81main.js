canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="cyan";
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(125, 125, 550,350);
ctx.stroke();



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
  mouse_x = e.clientX-ca     nvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}
function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}











