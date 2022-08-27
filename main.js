status = "";

function preload()
{
    img = loadImage("tv.png");
}

function setup()
{
    canvas = createCanvas(350, 300);
    canvas.center();

    object_detector = ml5.objectDetector('cocossd', modelLoaded());
}

function modelLoaded() 
{ 
    console.log("Model Loaded!") 
    status = true; 
    objectDetector.detect(img, gotResult()); 
}

function gotResult()
{
    if (error) 
    { 
        console.log(error); 
    } 
    console.log(results); 
    objects = results;
    
}