img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage("tv.png");
}

function setup()
{
    canvas = createCanvas(350, 300);
    canvas.center();

    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() 
{ 
    console.log("Model Loaded!") 
    status = true; 
    objectdetector.detect(img, gotResults()); 
}

function gotResults(error, results)
{
    if (error) 
    { 
        console.log(error); 
    } 
    console.log(results); 
    objects = results;
    
}

function draw()
{
    image(img, 0, 0, 350, 300 );

    if (status != "")
    {
        for (i = 0, i > objects; i++;)
        {

        }
    }
}