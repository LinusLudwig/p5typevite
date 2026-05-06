import P5 from "p5";

const sketch = (p: P5) => {
  const bgColor = p.color(255, 255, 255);
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(p.windowWidth, 600);
    p.background(bgColor);
  };

  p.draw = () => {
    p.fill(255, 0, 0); // red
    p.noStroke();

    let circleSize = p.sin(p.frameCount * 0.05);
    p.circle(p.mouseX, p.mouseY, 50);
  };

  p.mousePressed = () => {
    p.background(bgColor);
  };
};

// Create a new p5 instance in instance mode. Meaning we allways have to get the ref to p5 in order to call its functions
new P5(sketch, document.getElementById("sketch")!);
