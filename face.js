/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = false;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 6;

// other variables can be in here too
// here's some examples for colors used




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
   

  this.FaceMode = 7;
  this.LeftEyeBrowType = 0;
  this.RightEyeBrowType = 0;
  this.MouthType = 0;
  this.LeftEyeType = 1;
  this.RightEyeType = 1;

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

    

   this.Eyechange = 1;
   this.MouthWidth = 1;
   
 
   this.Red_color = color(255,149,149); // femal base color for skin
   this.darkRed = color(255, 98, 98);
   this.MidDarkRed = color(255, 133,133);
   this.LightRed= color(255, 174, 174);

   this.Blue_color = color(148, 157, 255);// Male Base color for skin
   this.DarkBlue_color = color(72,87,255);
   this.MidDarkBlue_color = color(123,134,255);
   this.lightBlue_color = color(174, 180, 255);
   
   this.Red_color2 = color(255, 75, 75);//Female Highlights
   this.Dark_red = color(255, 0, 0);
   this.MidRed = color(255,45,45);
   this.light_Red = color(255,100,100);
   
   this.Blue_color_dark = color(52, 64, 229);//Male highlights
   this.Blue_color2 = color(110, 120, 230);
   this.semi_dark_blue = color(100, 100, 255);
   this.Light_blue_color = color(155, 155, 255);
   

   this.Face_color = [this.darkRed, this.MidDarkRed, this.Red_color, this.LightRed, this.DarkBlue_color, this.MidDarkBlue_color, this.Blue_color, this.lightBlue_color]; // Array for face color
   this.Color2 = [this.Dark_red,  this.MidRed, this.Red_color2, this.light_Red,  this.Blue_color_dark,  this.semi_dark_blue, this.Blue_color2, this.Light_blue_color]; // array for mouth, eyebrows, nose and eyes.

   this.faceSize = 5; // these are used for to keep the base face the same throughout each face change.
   this.FaceX = 0;
   

   this.averageRighteye = segment_average(positions.right_eye);
   this.averageLefteye = segment_average(positions.left_eye);
   this.averageBottomLip = segment_average(positions.bottom_lip);
   this.averageNoseBridge = segment_average(positions.nose_bridge);
   this.averageRightEyebrow = segment_average(positions.right_eyebrow);
   this.averageLeftEyebrow = segment_average(positions.left_eyebrow);

  
    // rotation in degrees
     
     ellipseMode(CENTER);

   // head
    noStroke();
    fill(this.Face_color[this.FaceMode]);  // sets color, allows to swap between each color for the emotionns
    ellipse(this.FaceX, 0, this.faceSize, this.faceSize);

    //nose
    fill(this.Color2[this.FaceMode]);
    arc(this.averageNoseBridge[0], this.averageNoseBridge[0], .5, .5, 180, 360, CHORD); 
    
    
   
    
       //right eyebrows
    
    if(this.RightEyeBrowType === 0){//Short Right EyeBrow
    stroke(this.Color2[this.FaceMode]);
    noFill();
    arc(this.averageRightEyebrow[0], this.averageRightEyebrow[1], 1, .5, 190, 280)//Tiny Right eyebrow
    }

    if(this.RightEyeBrowType === 1){//Medium right eyebrows
     stroke(this.Color2[this.FaceMode]);
     noFill();
     arc(this.averageRightEyebrow[0], this.averageRightEyebrow[1], 1, .5, 190, 350);//medium right eyebrow
     
    }

      if(this.RightEyeBrowType === 2){
    stroke(this.Color2[this.FaceMode]);
    noFill();
    arc(this.averageRightEyebrow[0], this.averageRightEyebrow[1], 2, .5, 190, 350);//long right eyebrow
    }
    
       if(this.RightEyeBrowType === 3){ //Right non exsistent eyebrows
        stroke(this.Color2[this.FaceMode]);
     noFill();
     arc(this.averageRightEyebrow[0], this.averageRightEyebrow[1], 1, .5, 215, 350);
    }

      //Left eyebrows
    if(this.LeftEyeBrowType === 0){//Short left EyeBrow
       stroke(this.Color2[this.FaceMode]);
    noFill()
    arc(this.averageLeftEyebrow[0], this.averageLeftEyebrow[1], 1, .5, 270, 360);//left eyebrow
    }

    if(this.LeftEyeBrowType === 1){//small left eyebrows
         stroke(this.Color2[this.FaceMode]);
     noFill();
     arc(this.averageLeftEyebrow[0], this.averageLeftEyebrow[1], 1, .5, 190, 350);//small left eye
    }

      if(this.LeftEyeBrowType === 2){
      stroke(this.Color2[this.FaceMode]);
    noFill();
    arc(this.averageLeftEyebrow[0], this.averageLeftEyebrow[1], 1.5, .5, 190, 350);//long Left eyebrow
    }

    if(this.LeftEyeBrowType === 3){ //Left non exsistent eyebrows
     stroke(this.Color2[this.FaceMode]);
     noFill();
     arc(this.averageLeftEyebrow[0], this.averageLeftEyebrow[1], 1, .5, 180, 320);
    }

       //Left Eyes
     if( this.LeftEyeType === 0){
        fill(this.Color2[this.FaceMode]);
        arc(this.averageLefteye[1], this.averageLefteye[0], .5, .5, 180, 360, CHORD);//Half eyes
     }
    
      //eyes
      if(this.LeftEyeType === 1){
        fill(this.Color2[this.FaceMode]);
        ellipse(this.averageLefteye[1],this.averageLefteye[0], .5,.25)//Oval Eye
      }

          //eyes
      if(this.LeftEyeType === 2){
        fill(this.Color2[this.FaceMode]);//small eyes
        arc(this.averageLefteye[1], this.averageLefteye[0], 1, 1, 180, 360, CHORD);
      }

      //eyes
       if(this.LeftEyeType === 3){
        fill(this.Color2[this.FaceMode]);//small upside down eyes
        arc(this.averageLefteye[0], this.averageLefteye[1], .5, .5, 0, 180, CHORD);
      }
      
       ////Right Eyes!

      //Right eyes
     if( this.RightEyeType === 0){
        fill(this.Color2[this.FaceMode]);//half eyes right side
       arc(this.averageRighteye[0], this.averageRighteye[1], .5, .5, 180, 360, CHORD);//Half eyes right side
     }
   
       //eyes
      if(this.RightEyeType === 1){
        fill(this.Color2[this.FaceMode]);
         ellipse(this.averageRighteye[0],this.averageRighteye[1], .5,.25)//Oval Eye
      }

        //eyes
      if(this.RightEyeType === 2){
        fill(this.Color2[this.FaceMode]);//small helf eyes right side
        arc(this.averageRighteye[0], this.averageRighteye[1], 1, 1, 180, 360, CHORD);
      }

      //eyes
      if(this.RightEyeType === 3){
        fill(this.Color2[this.FaceMode]);//small upside down eyes squinting
        arc(this.averageRighteye[0], this.averageRighteye[1], .5, .5, 0, 180, CHORD);
      }

           // //Mouth
    if(this.MouthType === 0){//small smile
      fill(this.Color2[this.FaceMode]);
      arc(this.averageBottomLip[0], this.averageBottomLip[1], 1.5, .5, 360, 180, CHORD);
    }
    
    if(this.MouthType === 1){
    //Mouth
     stroke(this.Color2[this.FaceMode]); //small sad mouth
      fill(this.Color2[this.FaceMode])
     arc(this.averageBottomLip[0], this.averageBottomLip[1], this.MouthWidth, .5, 180, 360);
    }
    
    if(this.MouthType === 2){
    //Mouth
   stroke(this.Color2[this.FaceMode]);//small smile
   fill(this.Color2[this.FaceMode]);
    arc(this.averageBottomLip[0], this.averageBottomLip[1], 1.5, 1, 360, 180, CHORD);
    }

    if(this.MouthType === 3){
      //Mouth
     stroke(this.Color2[this.FaceMode]);//small smile with stroke
     noFill();
      arc(this.averageBottomLip[0], this.averageBottomLip[1], 1.5, .5, 360, 180);
      }
    
  if(this.MouthType === 4){ //Nuetralish face
    //Mouth
   noFill(); 
   stroke(this.Color2[this.FaceMode]);
    arc(this.averageBottomLip[0], this.averageBottomLip[1], 2.5, .5, 180, 360);
  }

    //Mouth
     if(this.MouthType === 5){ // smiley face
   fill(this.Color2[this.FaceMode]);
    arc(this.averageBottomLip[0], this.averageBottomLip[1], 1, .5, 360, 180, CHORD);
  }

 // Mouth
  if(this.MouthType === 6){ //big sad face
    stroke(this.Color2[this.FaceMode]);
    arc(this.averageBottomLip[0], this.averageBottomLip[1], 2,1, 180, 360);
  }

  if(this.MouthType === 7){
    //Mouth
    stroke(this.Color2[this.FaceMode]);//small frown with stroke
    noFill()
    arc(this.averageBottomLip[0], this.averageBottomLip[1], 1.5, .5, 180, 360);
    }

    if(this.MouthType === 8){ //nuetral face
      stroke(this.Color2[this.FaceMode]);
      noFill();
      arc(this.averageBottomLip[0], this.averageBottomLip[1], 2,.1, 180, 360);
    }

    if(this.MouthType === 9){ //Smirk face starting from the left
     stroke(this.Color2[this.FaceMode]);
     noFill();
      arc(this.averageBottomLip[0], this.averageBottomLip[1], 2.5, .5, 18, 180);
    }

    if(this.MouthType === 10){ //Smirk face opposite side
     stroke(this.Color2[this.FaceMode]);
     noFill();
      arc(this.averageBottomLip[0], this.averageBottomLip[1], 2.5, .5, 360, 160);
    }

    if(this.MouthType === 11){ // smiley face
     stroke(this.Color2[this.FaceMode]);
     noFill();
      arc(this.averageBottomLip[0], this.averageBottomLip[1], 1, .25, 360, 180);
    }
   
    if(this.MouthType === 12){ // duck lips
     fill(this.Color2[this.FaceMode]);
      ellipse(this.averageBottomLip[0],this.averageBottomLip[1], .5,.25)//Oval mouth
    }

    if(this.MouthType === 13){ //small smirk face
     stroke(this.Color2[this.FaceMode]);
      noFill();
      arc(this.averageBottomLip[0], this.averageBottomLip[1], 1,.05, 360, 180);
    }
    if(this.MouthType === 14){ //small smirk face
      stroke(this.Color2[this.FaceMode]);
      noFill();
      arc(this.averageBottomLip[0], this.averageBottomLip[1], 1,.1, 180, 360);
    }

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
  }

  

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.FaceMode = int(map(settings[0], 0, 100, 0, 7));
    this.RightEyeBrowType = int(map(settings[1], 0, 100, 0, 3));
    this.LeftEyeBrowType = int(map(settings[2], 0, 100, 0, 3));
    this.LeftEyeType = int(map(settings[3], 0, 100, 0, 3));
    this.RightEyeType = int(map(settings[4], 0, 100, 0, 3));
    this.MouthType = int(map(settings[5], 0, 100, 0, 14));
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(5);
    settings[0] = int(map(this.FaceMode, 0, 7, 0, 7));
    settings[1] = map(this.RightEyeBrowType, 0, 3, 0, 100);
    settings[2] = map(this.LeftEyeBrowType, 0, 3, 0, 100);
    settings[3] = map(this.LeftEyeType, 0, 3, 0, 100);
    settings[4] = map(this.RightEyeType, 0, 3, 0, 100);
    settings[5] = map(this.MouthType, 0, 14, 0, 100);
    
    
    
    return settings;
  }
}