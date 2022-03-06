float x=1.0;
float y=0.0;
float z=0.0;

float rho = 28.0;
float sigma = 10.0;
float beta = 8.0 / 3.0;

ArrayList<PVector> points = new ArrayList<PVector>();

void setup(){

  size(800,600, P3D);
  //background(0);

}

void draw(){
  background(0);
//the differential equations
 float dt = 0.01;
 float dx = (sigma * (y-x)) * dt;
 float dy = (x * (rho - z) - y) * dt;
 float dz = ((x * y) - (beta * z)) * dt;
 //differential implementation
 x = x + dx;
 y = y + dy;
 z = z + dz;
 
 points.add(new PVector(x,y,z));

//ploting the differential equations
 translate(width/2, height/2);
 stroke(255);
 scale(5);
 noFill();
 
 beginShape();
 for(PVector v: points){
   vertex(v.x,v.y,v.z); 
 }
 endShape();
 
 point(x,y,z);
}
