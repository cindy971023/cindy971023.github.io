// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + bleedPadW;
var bleedYmin = 0;
var bleedYmax = cardH + bleedPadH;

// dims for centered card area
var cardXmin = 0 + bleedPadW * 0.5;
var cardXmax = cardW;
var cardYmin = 0 + (bleedPadH * 0.5);
var cardYmax = cardH;

// dims for centered padding area
var padXmin = 0 + bleedPadW;
var padXmax = cardW - bleedPadW;
var padYmin = 0 + bleedPadH;
var padYmax = cardH - bleedPadH;


function setup() {
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); // width and height of my canvas
	stroke("purple");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("pink");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("yellow");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	background(200, 0, 0, 50);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(55);
	textSize(fontSizeA);
	text("Jelly KPOP Ent.", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(75);
	textSize(fontSizeNorm);
	text("Cindy Lee", padXmin+bleedPadW, padYmax*0.55);
	fill(51, 102, 255); // note color values - try to improve with cymk-style colors
	text("Jelly Kpop Ent.", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(255, 51, 153); // note 4th value is alpha (transparency)
	text("0912345678", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(0, 138, 118);
	text("cindy19971023@gmail.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(225, 163, 103);
	text("http://vixx.hongbin.com.tw", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));


  // Set colors
  fill(100, 20, 200, 100);
  stroke(127, 63, 120);

  // A design for a simple flower
  translate(500, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 50, 80, 100);
    rotate(PI/5);
}

}


	

function draw() {


}