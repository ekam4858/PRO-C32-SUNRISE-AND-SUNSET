const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    


}

async function getBackgroundImg(){
    var res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    console.log(res)
    var jres = await res.json();
    var dt=jres.datetime
    var h =dt.slice(11,13)
    console.log(h)
    
   
    if(h>=4 && h<=6){
    bg="sunrise1.png"
    }
    else if (h>=6 && h<=8){
    bg="sunrise2.png"
    }
    else if (h>=6 && h<=8){
        bg="sunrise3.png"
        }
    else if (h>=8 && h<=10){
            bg="sunrise4.png"
    }
    else if (h>=10 && h<=12){
           bg="sunrise5.png"
       }
       else if (h>=12 && h<=14){
        bg="sunrise6.png"
        }
    else if (h>=14 && h<=16){
        bg="sunset7.png"
            }
    else if (h>=16 && h<=18){
     bg="sunset8.png"
      }
   else if (h>=18 && h<=20){
   bg="sunset9.png"
        }
else if (h>=20 && h<=22){
   bg="sunset10.png"
  }
   else if (h>=22 && h<=24){
   bg="sunrise11.png"
    }
  else if (h>=0 && h<=2){
       bg="sunrise12.png"
    }
else if (h>=2 && h<=4){
bg="sunrise2.png"
   }

    backgroundImg=loadImage(bg)

}
