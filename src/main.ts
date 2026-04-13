import P5 from "p5";

const sketch = (p: P5) => {
  var gnomeImage: P5.Image | undefined = undefined;

  p.preload = () => {
    // preload the gnome image and store it in a variable
    gnomeImage = p.loadImage("/gnom-1.png");
  };

  p.setup = () => {
    // Find the clearbutton in the dom
    const clearButton = document.getElementById(
      "clearButton",
    ) as HTMLButtonElement;
    // check if the button exists on the page
    if (clearButton !== null) {
      // add a function that gets called when the button is pressed
      clearButton.onclick = () => {
        console.log("Clicked clear button");
        p.background(255, 255, 255);
      };
    }

    // find the random rect button in the dom
    const spawnButton = document.getElementById(
      "spawnButton",
    ) as HTMLButtonElement;
    // check if the button exists on the page
    if (spawnButton !== null) {
      // add a function that gets called when the button is pressed
      spawnButton.onclick = () => {
        console.log("Clicked spawn rect button");
        p.fill(0, 255, 0);
        p.rectMode(p.CENTER);
        p.rect(p.random(0, p.width), p.random(0, p.height), 50, 50);
      };
    }

    // find the gnome button in the dom
    const gnomeButton = document.getElementById(
      "gnomeButton",
    ) as HTMLButtonElement;
    // check if the button exists on the page
    if (gnomeButton !== null) {
      // add a function that gets called when the button is pressed
      gnomeButton.onclick = () => {
        console.log("Clicked spawn gnome Button");
        if (!gnomeImage) {
          console.error("Gnome image not found");
          return;
        }
        p.image(
          gnomeImage,
          p.random(0, p.width),
          p.random(0, p.height),
          100,
          100,
        );
      };
    }

    // Canvas setup
    p.createCanvas(p.windowWidth, 600);
    p.background(255, 255, 255);
  };

  p.draw = () => {
    p.fill(255, 0, 0); // red
    p.noStroke();
    p.rectMode(p.CENTER);
    p.rect(p.mouseX, p.mouseY, 50, 50);
  };
};

// Create a new p5 instance in instance mode. Meaning we allways have to get the ref to p5 in order to call its functions
new P5(sketch, document.getElementById("sketch")!);
