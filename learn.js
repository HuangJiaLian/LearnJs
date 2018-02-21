var drawWinston = function() {
    var faceX = random(50, 350);
    var faceY = random(50,350);
    fill(255, 255, 0);
    ellipse(faceX, faceY, 300, 300); // face
    fill(46, 46, 41);
    ellipse(faceX - 45, faceY - 57, 40, 40); // eyes
    ellipse(faceX + 102, faceY - 66, 40, 40);
    fill(252, 65, 65);
    ellipse(faceX + 55, faceY + 32, 120, 136); // mouth

};
drawWinston();
drawWinston();
drawWinston();




---------------------------------------------------------
noStroke();
var x = 11; // position of the car

/*
var draw = function() {
     
};
*/

var drawCar = function() {
    background(252, 255, 214);

    // draw the car body
    fill(255, 0, 115);
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);
    
    // draw the wheels
    fill(77, 66, 66);
    ellipse(x + 25, 221, 24, 24);
    ellipse(x + 75, 221, 24, 24);
    
    x = x + 3;
};

mouseMoved = function() {
    fill(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, 10, 10);
};

-----------------------------------------------------------
background(99, 200, 255);
stroke(116, 57, 204);
fill(221, 0, 255);
var x = 100;
while (x < 329) {
    line(x, 94, 224, 300);
    ellipse(x, 94, 49, 68);
    
    x += 60;
}
/* The Three Loop Questions:
 1. What do I want to repeat? 
 2. What do I want to change each time? 
 3. How long should we repeat?
*/
var hopper = getImage("creatures/Hopper-Jumping");
image(hopper, 223, 232);

-----------------------------------------------------------
// Draw the tree and grass once
image(grass, x, 270);
image(tree, x, 200);

---------------------------------------------------

// Arrays!

var myFriend = "Sophia";

var myFriends = ["Sophia", "John", "Leif", "Winston", "OhNoes Guy!!"];

// myFriends[1]
fill(255, 0, 0);
text( myFriends[0], 10, 30);
text( myFriends[1], 10, 80);
text( myFriends[2], 10, 130);

text("I have " + myFriends.length + " friends!!!", 10, 150);

--------------------------------------------------
var xPositions = [100, 200];

var draw = function() {
    if (mouseIsPressed) {
        xPositions.push(mouseX);
    }
    noStroke();
    background(212, 254, 255);
    
    stroke(64, 117, 207);
    fill(196, 33, 255);
    for (var i = 0; i < xPositions.length; i++) { 
        line(xPositions[i], 120, 194, 285);
        ellipse(xPositions[i], 104, 32, 46);
    }
    var hopper = getImage("creatures/Hopper-Jumping");
    image(hopper, 189, 227);
};


--------------------------------------------------------

// Object oriented programming

/* 
 Winston
 - nickname
 - age
 - x 
 - y
*/
var Winston = function(nickname, age, x, y) {
    this.nickname = nickname;
    this.age = age + "yrs old";
    this.x = x;
    this.y = y;
};

var winstonTeen = new Winston("Winsteen", 15, 20, 50);
var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);

var drawWinston = function(winston) {
    fill(255, 0, 0);
    var img = getImage("creatures/Winston");
    image(img, winston.x, winston.y);
    var txt = winston.nickname + ", " + winston.age;
    text(txt, winston.x+20, winston.y-10);
};

drawWinston(winstonTeen);
drawWinston(winstonAdult);

---------------------------------------------------------

var Winston = function(nickname, age, x, y) {
    this.nickname = nickname;
    this.age = age + "yrs old";
    this.x = x;
    this.y = y;
};

var winstonTeen = new Winston("Winsteen", 15, 20, 50);
var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);

var drawWinston = function(winston) {
    fill(255, 0, 0);
    var img = getImage("creatures/Winston");
    image(img, winston.x, winston.y);
    var txt = winston.nickname + ", " + winston.age;
    text(txt, winston.x+20, winston.y-10);
};

drawWinston(winstonTeen);
drawWinston(winstonAdult);
---------------------------------------------------------
var Winston = function(nickname, age, x, y) {
    this.nickname = nickname;
    this.age = age + "yrs old";
    this.x = x;
    this.y = y;
};

// the draw method
Winston.prototype.draw = function() {
    fill(255, 0, 0);
    var img = getImage("creatures/Winston");
    image(img, this.x, this.y);
    var txt = this.nickname + ", " + this.age;
    text(txt, this.x+20, this.y-10);    
};

Winston.prototype.talk = function() {
    text("I'm Winston!", this.x+20, this.y+150);
};

var winstonTeen = new Winston("Winsteen", 15, 20, 50);
var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);

winstonTeen.draw();
winstonTeen.talk();
winstonAdult.draw();
winstonAdult.talk();
---------------------------------------------------------
继承
var Creature = function(nickname, age, x, y) {
    this.nickname = nickname;
    this.age = age + "yrs old";
    this.x = x;
    this.y = y;
};

Creature.prototype.talk = function() {
    text("SUPPP!?!?!?!??!", this.x+20, this.y+140);  
};

var Hopper = function(nickname, age, x, y) {
    Creature.call(this, nickname, age, x, y);
};

Hopper.prototype = Object.create(Creature.prototype);

Hopper.prototype.draw = function() {
    fill(217, 90, 0);
    var img = getImage("creatures/Hopper-Happy");
    image(img, this.x, this.y);
    var txt = this.nickname + ", " + this.age;
    text(txt, this.x+10, this.y-7);  
};

Hopper.prototype.hooray = function() {
   text("Hooooray!!!", this.x+29, this.y+140);  
};

var Winston = function(nickname, age, x, y) {
    Creature.call(this, nickname, age, x, y);
};

Winston.prototype = Object.create(Creature.prototype);

Winston.prototype.draw = function() {
    fill(255, 0, 0);
    var img = getImage("creatures/Winston");
    image(img, this.x, this.y);
    var txt = this.nickname + ", " + this.age;
    text(txt, this.x+20, this.y-10);  
};


var winstonTeen = new Winston("Winsteen", 15, 20, 50);
var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);

winstonTeen.draw();
winstonTeen.talk();
winstonAdult.draw();

var lilHopper = new Hopper("Little Hopper", 15, 20, 240);
lilHopper.draw();
lilHopper.talk();
var bigHopper = new Hopper("Big Hopper", 30, 220, 240);
bigHopper.draw();
bigHopper.hooray();
---------------------------------------------------------
/*************
*OBJECT TYPES
**************/
/******************
*Flower Object Type
*******************/
var Flower = function(x, y, height) {
  this.x = x;
  this.y = y;
  this.height = height;
};

Flower.prototype.growBy = function(amount) {
    this.height += amount;
};

/*****************
*Tulip Object Type
******************/
var Tulip = function(x, y, height) {
    Flower.call(this, x, y, height);
};

Tulip.prototype = Object.create(Flower.prototype);

Tulip.prototype.draw = function() {
    noStroke();
    fill(16, 122, 12);
    rect(this.x, this.y, 10, -this.height);
    fill(255, 0, 0);
    // petals
    ellipse(this.x+5, this.y-this.height, 44, 44);
    triangle(this.x-16, this.y-this.height, 
            this.x+20, this.y-this.height,
            this.x-20, this.y-this.height-31);
    triangle(this.x-14, this.y-this.height, 
            this.x+24, this.y-this.height,
            this.x+3, this.y-this.height-39);
    triangle(this.x+-4, this.y-this.height, 
            this.x+26, this.y-this.height,
            this.x+29, this.y-this.height-36);
};

/*********************
*Sunflower Object Type
**********************/
var Sunflower = function(x, y, height) {
    Flower.call(this, x, y, height); // 从父亲那里创建
};
// 共享父亲的所有方法
Sunflower.prototype = Object.create(Flower.prototype);
Sunflower.prototype.draw = function() {
    fill(16, 122, 12);
    
    rect(this.x, this.y, 10, -this.height);
    
    // petals
    stroke(0, 0, 0);
    fill(255, 221, 0);
    ellipse(this.x-10, this.y-this.height, 20, 18);
    ellipse(this.x+5, this.y-this.height-15, 20, 18);
    ellipse(this.x+5, this.y-this.height+15, 20, 18);
    ellipse(this.x+20, this.y-this.height, 20, 18);
    fill(20, 20, 20);
    ellipse(this.x+5, this.y-this.height, 20, 20);
};


/**************
*MAIN PROGRAM
***************/

/** create object instances **/
var tulip = new Tulip(38, 390, 150);
var tulip1 = new Tulip(50,390,70);
var sunflower = new Sunflower(186, 390, 100);
var sunflower1 = new Sunflower(210,390,80);

var drawScene = function() {
    background(207, 250, 255);
    tulip.draw();
    sunflower.draw();
    tulip1.draw();
    sunflower1.draw();
};

mouseClicked = function() {
    tulip.growBy(10);
    sunflower.growBy(20);
    tulip1.growBy(5);
    sunflower1.growBy(10);
    drawScene();
};

drawScene();
------------------------------------------------------------------------------------------------------------------

