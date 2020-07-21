const canvas = document.getElementById('canvas')

//to fetch 2d context for drawing shapes and other things
const ctx = canvas.getContext('2d')
/*
// filRect()
ctx.fillStyle= 'red'
ctx.fillRect(20,20,150,100)
ctx.fillStyle = 'blue'
ctx.fillRect(200,20,150,100)


//strokeRect()
ctx.lineWidth=10
ctx.strokeStyle='green'
ctx.strokeRect(100,200,150,100)

//clearrect()
ctx.clearRect(25,25,140,90)

//fillText()

ctx.font='30px Arial'
ctx.fillStyle = 'purple'
ctx.fillText('Hello Shipra' , 400,50)


//strokeText()
ctx.lineWidth=1;
ctx.strokeStyle='green'
ctx.strokeText('Hi Shipra' , 400,100)
*/
//paths
/*
ctx.beginPath()
ctx.moveTo(50,50)
ctx.lineTo(150,50)
ctx.lineTo(100,200)
ctx.lineTo(50,50)
ctx.fillStyle='coral'
ctx.fill()


ctx.beginPath()
ctx.moveTo(200,50)
ctx.lineTo(150,200)
ctx.lineTo(250,200)
ctx.lineTo(200,50)
ctx.fillStyle='coral'
ctx.fill()

ctx.beginPath()
ctx.rect(300,50,150,100)
ctx.fillStyle='coral'
ctx.fill()*/


/* 
//arc circles

// arc(x,y,radius,startangle,end_angle,anticlockwise)
const centreX = canvas.width /2
const centreY = canvas.height /2
ctx.beginPath()
ctx.arc(centreX, centreY ,200,0,Math.PI* 2,true ) 

//move to mouth
ctx.moveTo(centreX+100,centreY)

//draw mouth
ctx.arc(centreX,centreY,100,0,Math.PI,false)
ctx.stroke()

//move left eye
ctx.moveTo(centreX-60,centreY-80)

//draw left eye
ctx.arc(centreX-80,centreY-80,20,0,Math.PI *2)


//move to right eye
ctx.moveTo(centreX +100,centreY-80)

//draw right eye
ctx.arc(centreX+80,centreY-80,20,0,Math.PI * 2)
ctx.stroke()
*/



/*
// let's come to animation
// fun part
//Animation 1
const circle = {
    x:200,
    y:200,
    size:30,
    dx:5,
    dy:4
}

function drawCircle(){
    ctx.beginPath()
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI *2)
    ctx.fillStyle='purple'
    ctx.fill()
}


function update(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height)
    
    drawCircle()
    circle.x += circle.dx
    circle.y += circle.dy
    if(circle.x + circle.size >600 || circle.x - circle.size <0){
        circle.dx *= -1
    } 
    if(circle.y + circle.size >600 || circle.y - circle.size <0){
        circle.dy *= -1
    }
    requestAnimationFrame(update)
}


update()
*/


// Animation -2
const image = document.getElementById('source')
const player ={
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed : 2,
    dx: 0,
    dy: 0
}

function drawPlayer(){
    ctx.drawImage(image,player.x,player.y,player.w,player.h)

}
function newPos(){
    player.x +=player.dx;
    player.y+=player.dy
    detectwalls()
}
function detectwalls(){
    if(player.x <0){
        player.dx =0;
        player.dy=0;
    }if(player.x + player.width > canvas.width){
        player.dx =0;
        player.dy=0;
    }if(player.y <0){
        player.dx =0;
        player.dy=0;
    }if(player.y + player.height > canvas.height){
        player.dy =0;
        player.dx =0;
    }
}
function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawPlayer()
    newPos()
    
    
    requestAnimationFrame(update)
}
update()
function keyup(e){
    if(e.key === 'ArrowRight'){
        moveRight()
     }
    if(e.key === 'ArrowLeft'){
         moveLeft()
    }
    if(e.key === 'ArrowUp'){
         moveUp()
    }
    if(e.key === 'ArrowDown'){
         moveDown()
    }
}
function moveUp(){
   player.dy = -player.speed;
}
function moveDown(){
    player.dy = player.speed
}
function moveLeft(){
    player.dx = -player.speed
}
function moveRight(){
    player.dx = player.speed
}
function keydown(e){
    
}
document.addEventListener('keydown' , keydown)
document.addEventListener('keyup' , keyup)
