var c = document.getElementById("pti_biscuit");
var ctx = c.getContext("2d");

//tete

ctx.beginPath();
ctx.arc(200,100,75,0,Math.PI*2,true); //cercle
ctx.fillStyle = "#976F0F";
ctx.fill();
//yeux
ctx.beginPath();
ctx.arc(175,80,12,0,Math.PI*2,true); //cercle
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath();
ctx.arc(225,80,12,0,Math.PI*2,true); //cercle
ctx.fillStyle = "#white";
ctx.fill();
//sourcil
ctx.beginPath();
ctx.moveTo(163,60);
ctx.quadraticCurveTo(175,50,187,60); // courbe avec un point de passage
ctx.lineWidth = "3";
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(213,60);
ctx.quadraticCurveTo(225,50,237,60); // courbe avec un point de passage
ctx.linewitdh ="3";
ctx.strokeStyle = "white";
ctx.stroke();

//bouche

ctx.beginPath();
ctx.moveTo(160,130);
ctx.quadraticCurveTo(200,150,240,130); // courbe avec un point de passage
ctx.linewitdh ="1";
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(160,130);
ctx.quadraticCurveTo(200,170,240,130); // courbe avec un point de passage
ctx.linewitdh ="1";
ctx.strokeStyle = "red";
ctx.stroke();

//corps
ctx.fillStyle = "#976F0F";
ctx.fillRect(150,155,100,200);

//bras

ctx.fillStyle = "#976F0F";
ctx.fillRect(20,155,360,50);

//mains

ctx.beginPath();
ctx.moveTo(20,155);
ctx.quadraticCurveTo(0,180,20,205); // courbe avec un point de passage
ctx.fillStyle = "#976F0F";
ctx.fill();
ctx.beginPath();
ctx.moveTo(380,155);
ctx.quadraticCurveTo(400,180,380,205); // courbe avec un point de passage
ctx.fillStyle = "#976F0F";
ctx.fill();

//jambes
ctx.fillStyle = "#976F0F";
ctx.fillRect(150,350,40,40);
ctx.fillRect(210,350,40,40);

//pieds
ctx.beginPath();
ctx.moveTo(150,390);
ctx.quadraticCurveTo(170,400,190,390); // courbe avec un point de passage
ctx.fillStyle = "#976F0FW";
ctx.fill();
ctx.beginPath();
ctx.moveTo(210,390);
ctx.quadraticCurveTo(230,400,250,390); // courbe avec un point de passage
ctx.fillStyle = "#976F0F";
ctx.fill();

//boutons
ctx.beginPath();
ctx.arc(200,200,10,0,Math.PI*2,true); //cercle
ctx.fillStyle = "#7E3464";
ctx.fill();
ctx.beginPath();
ctx.arc(200,250,10,0,Math.PI*2,true); //cercle
ctx.fillStyle = "#7E3464";
ctx.fill();

//entre-jambes

ctx.beginPath();
ctx.moveTo(190,355);
ctx.quadraticCurveTo(200,340,210,355); // courbe avec un point de passage
ctx.fillStyle = "white";
ctx.fill();
