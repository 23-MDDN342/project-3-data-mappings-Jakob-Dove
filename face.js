/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 3;

// other variables can be in here too
// here's some examples for colors used


const stroke_color = [95, 52, 8];

// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}

// This where you define your own face object
function Face() {
  this.Eyechange = 1;
  this.MouthWidth = 1;
  this.FaceMode = 0;

   this.Red_color = color(255, 174, 174); // all the color that go ino the color_value array
   this.Blue_color = color(148, 157, 255);
   this.Yellow_color = color(255, 243, 199);
   this.Green_color = color(162, 252, 187);
   this.Orange_color = color(255, 145, 99);

   this.Red_color2 = color(255, 100, 100);// all the colors that go into the color2 array
   this.Blue_color2Blue_color2 = color(131, 152, 238);
   this.Yellow_color2 = color(255, 226, 122);
   this.Green_color2 = color(135, 230, 189);
   this.Orange_color2 = color(232, 121, 102);

   this.Color_value = [this.Red_color, this.Blue_color, this.Yellow_color, this.Green_color, this.Orange_color]; // this allows color to be chosen through out each face that is chosen
   this.Color2 = [this.Red_color2, this.Blue_color2, this.Yellow_color2, this.Green_color2,this.Orange_color2]; // This is a secondary color that accents features like the mouth, eyebrows, nose and eyes.
   

  let faceSize = 20 // these are used for some of the variables that stay the same throughout each face.
  let ArcXval = 0;
  let eyeX = -5;
  let eyeX2 = 5;
  let FaceX = 0;
  let arcwidth = 2;
  let archeight = 2;
  let eyeY = -3;
  let noseY = 2;
  let mouthY = 8;
  
  // rotation in degrees
  angleMode(DEGREES);
  

  if(this.FaceMode === 0 || this.FaceMode === 1 || this.FaceMode === 2 || this.FaceMode === 3 || this.FaceMode === 4){ // This allows the faces to switch between the different emotions 
    // head
    noStroke();
    fill(this.Color_value[this.FaceMode]);  // sets color, allows to swap between each color for the emotionns
    ellipse(FaceX, 0, faceSize, faceSize);
  }
  
  if(this.FaceMode === 0){//Grumpy

    //eyes
    fill(this.Color2[this.FaceMode]);
    arc(eyeX, eyeY, arcwidth+this.Eyechange, archeight+this.Eyechange, 180, 360, CHORD);
    arc( eyeX2, eyeY, arcwidth+this.Eyechange, archeight+this.Eyechange, 180, 360, CHORD);
   
    //nose
    arc(ArcXval, noseY, arcwidth, 1, 180, 360, CHORD);

    //Mouth
    arc(ArcXval, mouthY, 8+this.MouthWidth, 1, 180, 360, CHORD);

    //eyebrows
    stroke(this.Color2[this.FaceMode])
    line(3,-5, 7, -6);
    line(-3,-5, -7, -6);

  }

  if(this.FaceMode === 1){//Gloomy
    let arcwidth = 6; // sets the width and height for the eyes
    let archeight = 6;
    let eyeY = -2;
    fill(this.Color2[this.FaceMode]);
    
    //eyes
    
    arc(eyeX, eyeY, arcwidth, archeight+Eyechange, 180, 360, CHORD);
    arc( eyeX2, eyeY, arcwidth, archeight+Eyechange, 180, 360, CHORD);
   
    //nose
    arc(ArcXval, noseY, 5, 2, 180, 360, CHORD);
    stroke(this.Color2[this.FaceMode]);
    noFill();
    

    //Mouth
    strokeWeight(1);
    arc(ArcXval, mouthY, 5+this.MouthWidth, 5, 180, 360);
    

  }

  if(this.FaceMode === 2){//Glad

    let mouthY = 5; 

    
    //eyes
    fill(this.Color2[this.FaceMode]);
    arc(eyeX, eyeY, 3+Eyechange, 5+Eyechange, 360, 0);
    arc( eyeX2, eyeY, 3+Eyechange, 5+Eyechange, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 5, 2, 360, 0);
    
    //Mouth
    stroke(this.Color2[this.FaceMode]);
    arc(ArcXval, mouthY, 8+this.MouthWidth, 8, 360, 180, CHORD);

  }

  if(this.FaceMode === 3){//disgust
    let eyeX = -5;//sets the values that change each face
    let eyeX2 = 4;
    let mouthY = 7;
    let eyeY = -3.25;

    
    //eyes
    fill(this.Color2[this.FaceMode]);
    arc(eyeX, eyeY, 1+Eyechange, 1+Eyechange, 360, 0);
    arc( eyeX2, eyeY, 1+Eyechange, 1+Eyechange, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 1, 2, 360, 0);
    
    //Mouth
    noFill();
    stroke(this.Color2[this.FaceMode]);
    arc(1, mouthY, 8+this.MouthWidth, 1, 180, 225);

    //eyebrows 
    strokeWeight(.5);
    line(-5.2, -3.9, -3, -3.9);
    line(4, -3.9, 6.2, -3.9);
    
  }

  if(this.FaceMode === 4){//confidence
    let eyeX = -5;
    let eyeX2 = 4;
    let mouthY = 7;

    //eyes
    fill(this.Color2[this.FaceMode]);
    arc(eyeX, eyeY, 2+Eyechange, 2+Eyechange, 360, 0);
    arc( eyeX2, eyeY, 2+Eyechange, 2+Eyechange, 360, 0);
   
    //nose
    arc(ArcXval, noseY, 1, 2, 360, 0);
    
    //Mouth
    noFill();
    stroke(this.Color2[this.FaceMode]);
    strokeWeight(1)
    arc(0, mouthY, 8+this.MouthWidth, 1, 36, 180);
    
  }

   

  // these are state variables for a face
  // (your variables should be different!)
  // this.detailColour = [204, 136, 17];
  // this.mainColour = [51, 119, 153];
  // this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  // this.eye_shift = -1;   // range is -10 to 10
  // this.mouth_size = 1;  // range is 0.5 to 8

  // this.chinColour = [153, 153, 51]
  // this.lipColour = [136, 68, 68]
  // this.eyebrowColour = [119, 85, 17]

  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    ellipse(0,0,1)
   
  }

  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
  };

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    this.eye_shift = map(settings[1], 0, 100, -2, 2);
    this.mouth_size = map(settings[2], 0, 100, 0.5, 8);
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);
    return settings;
  }
}



// console.log()
// // head
// ellipseMode(CENTER);
// stroke(stroke_color);
// fill(this.mainColour);
// ellipse(segment_average(positions.chin)[0], 0, 3, 4);
// noStroke();


// // mouth
// fill(this.detailColour);
// ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);

// // eyebrows
// fill( this.eyebrowColour);
// stroke( this.eyebrowColour);
// strokeWeight(0.08);
// this.draw_segment(positions.left_eyebrow);
// this.draw_segment(positions.right_eyebrow);

// // draw the chin segment using points
// fill(this.chinColour);
// stroke(this.chinColour);
// this.draw_segment(positions.chin);

// fill(100, 0, 100);
// stroke(100, 0, 100);
// this.draw_segment(positions.nose_bridge);
// this.draw_segment(positions.nose_tip);

// strokeWeight(0.03);

// fill(this.lipColour);
// stroke(this.lipColour);
// this.draw_segment(positions.top_lip);
// this.draw_segment(positions.bottom_lip);

// let left_eye_pos = segment_average(positions.left_eye);
// let right_eye_pos = segment_average(positions.right_eye);

// // eyes
// noStroke();
// let curEyeShift = 0.04 * this.eye_shift;
// if(this.num_eyes == 2) {
//   fill(this.detailColour);
//   ellipse(left_eye_pos[0], left_eye_pos[1], 0.5, 0.33);
//   ellipse(right_eye_pos[0], right_eye_pos[1], 0.5, 0.33);

//   // fill(this.mainColour);
//   // ellipse(left_eye_pos[0] + curEyeShift, left_eye_pos[1], 0.18);
//   // ellipse(right_eye_pos[0] + curEyeShift, right_eye_pos[1], 0.18);
// }
// else {
//   let eyePosX = (left_eye_pos[0] + right_eye_pos[0]) / 2;
//   let eyePosY = (left_eye_pos[1] + right_eye_pos[1]) / 2;

//   fill(this.detailColour);
//   ellipse(eyePosX, eyePosY, 0.45, 0.27);

//   fill(this.mainColour);
//   ellipse(eyePosX - 0.1 + curEyeShift, eyePosY, 0.18);
// }
// // fill(0)
// //ellipse(0,0, 0.5,0.5) center point
// //rect(-2,-2,4.5,4) sizing debug 