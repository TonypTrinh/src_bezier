let P0 = {x: 50, y: 350, relativX: undefined, relativY: undefined};
let P1 = {x: 100, y: 50, relativX: undefined, relativY: undefined};
let P2 = {x: 300, y: 50, relativX: undefined, relativY: undefined};
let P3 = {x: 350, y: 350, relativX: undefined, relativY: undefined};
let P31 = {x: 351, y: 351, relativX: undefined, relativY: undefined};
let P4 = {x: 400, y: 50, relativX: undefined, relativY: undefined};
let P5 = {x: 600, y: 50, relativX: undefined, relativY: undefined};
let P6 = {x: 650, y: 350, relativX: undefined, relativY: undefined};
let A = {x: undefined, y: undefined};
let B = {x: undefined, y: undefined};
let C = {x: undefined, y: undefined};
let D = {x: undefined, y: undefined};
let E = {x: undefined, y: undefined};
let P = {x: undefined, y: undefined};
let A1 = {x: undefined, y: undefined};
let B1 = {x: undefined, y: undefined};
let C1 = {x: undefined, y: undefined};
let D1 = {x: undefined, y: undefined};
let E1 = {x: undefined, y: undefined};
let p1 = {x: undefined, y: undefined};
let t = 0 
let e = 0
let pd=20

let bezierPoints = [P0,P1,P2,P3,P4,P5,P6]

function setup() {
  createCanvas(1500, 800);
}

function draw() {
  background(220);
 movePoint()
  for(let t=0; t<1; t+=0.001){
    calcSpline1(t);
    drawSpline1();
    }
  drawPoints()
  
  text("Click & drag the points to change the bézier curve",10,20)
    for(let e=0; e<1; e+=0.001){
      calcSpline2(e);
      drawSpline2();
    }
    //supportLines()
  }


function calcSpline1(t){
  A.x=lerp(P0.x,P1.x,t)
  A.y=lerp(P0.y,P1.y,t)
  B.x=lerp(P1.x,P2.x,t)
  B.y=lerp(P1.y,P2.y,t)
  C.x=lerp(P2.x,P3.x,t)
  C.y=lerp(P2.y,P3.y,t)
  D.x=lerp(A.x,B.x,t)
  D.y=lerp(A.y,B.y,t)
  E.x=lerp(B.x,C.x,t)
  E.y=lerp(B.y,C.y,t)
  P.x=lerp(D.x,E.x,t)
  P.y=lerp(D.y,E.y,t)
  
}

function calcSpline2(e){
  A1.x=lerp(P3.x,P4.x,e)
  A1.y=lerp(P3.y,P4.y,e)
  B1.x=lerp(P4.x,P5.x,e)
  B1.y=lerp(P4.y,P5.y,e)
  C1.x=lerp(P5.x,P6.x,e)
  C1.y=lerp(P5.y,P6.y,e)
  D1.x=lerp(A1.x,B1.x,e)
  D1.y=lerp(A1.y,B1.y,e)
  E1.x=lerp(B1.x,C1.x,e)
  E1.y=lerp(B1.y,C1.y,e)
  p1.x=lerp(D1.x,E1.x,e)
  p1.y=lerp(D1.y,E1.y,e)
}

//function supportLines(){
 // line(P0.x,P0.y,P1.x,P1.y);
//  line(P1.x,P1.y,P2.x,P2.y);
//  line(P2.x,P2.y,P3.x,P3.y);
//}

function drawSpline1(){
  circle(P.x,P.y,15);
}

function drawSpline2(){
  circle(p1.x,p1.y,15);
}

function drawPoints(){
  circle(P0.x,P0.y,pd);
  circle(P1.x,P1.y,pd);
  circle(P2.x,P2.y,pd);
  circle(P3.x,P3.y,pd);

  
  circle(P4.x,P4.y,pd)
  circle(P5.x,P5.y,pd)
  circle(P6.x,P6.y,pd)

}

function movePoint(){
  for(let i=0; i<bezierPoints.length;i++){
    if(bezierPoints[i].relativX!=undefined){
      bezierPoints[i].x=mouseX+bezierPoints[i].relativX
      bezierPoints[i].y=mouseY+bezierPoints[i].relativY
    }
  } 
}

function mousePressed(){
  for(let i=0; i<bezierPoints.length;i++){
    if(dist(bezierPoints[i].x,bezierPoints[i].y,mouseX,mouseY)<pd/2){
      bezierPoints[i].relativX=bezierPoints[i].x-mouseX
      bezierPoints[i].relativY=bezierPoints[i].y-mouseY
    }
  } 
  
}

function mouseReleased(){
  for(let i=0; i<bezierPoints.length;i++){
    bezierPoints[i].relativX=undefined
    bezierPoints[i].relativY=undefined
  } 
}


//let k=0;