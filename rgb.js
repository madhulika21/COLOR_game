var nos=6;
var colors = generatecolor(nos); 
var colorsquare = document.querySelectorAll(".colorsquare");
var pickedcolor = pickedcolor1();
var rgbcolor = document.getElementById("rgb");
var message = document.getElementById("message");
var h1=document.querySelector("h1"); 
var resetbutton=document.querySelector("#reset");
var easybutton=document.querySelector("#easybutton");
var hardbutton=document.querySelector("#hardbutton");

easybutton.addEventListener("click",function()
{   nos=3;
	hardbutton.classList.remove("selection");
	easybutton.classList.add("selection");
	colors = generatecolor(nos);
	pickedcolor=pickedcolor1();
	rgbcolor.textContent = pickedcolor;
	h1.style.background="steelblue";
	message.textContent="";
    for(var i=0;i<=colorsquare.length;i++)
    {   if (colors[i]) 
    	{colorsquare[i].style.background=colors[i];}
    	else
    	{
    	colorsquare[i].style.display="none";
    	}

    }   
     
    
})
hardbutton.addEventListener("click",function()
{ 	nos=6;
	easybutton.classList.remove("selection");
	hardbutton.classList.add("selection");
	colors = generatecolor(nos);
	pickedcolor=pickedcolor1();
	rgbcolor.textContent = pickedcolor;
	h1.style.background="steelblue";
	message.textContent="";
    for(var i=0;i<=colorsquare.length;i++)
    { 
    	colorsquare[i].style.background=colors[i];
    	colorsquare[i].style.display="block";
    	

    }
})







resetbutton.addEventListener("click",function()
{
	
	colors = generatecolor(nos);
	pickedcolor = pickedcolor1();
	rgbcolor.textContent = pickedcolor;
	h1.style.background="steelblue";
	message.textContent="";
	this.textContent="NEW COLORS"
    for(var i=0;i<=colorsquare.length;i++)
    {
    	colorsquare[i].style.background=colors[i];
    } 
    
})
rgbcolor.textContent = pickedcolor;

for (var i = 0; i < colorsquare.length ; i++)
{
	colorsquare[i].style.background = colors[i];



colorsquare[i].addEventListener("click",function(){
	var clickedColor = this.style.background;
	if (clickedColor === pickedcolor) 
	{ 
		message.textContent="BLAAH COrrect";
		resetbutton.textContent="PLAY AGAIN??"
		changecolor(clickedColor);
		h1.style.background = clickedColor;
	}

	else
	{
		this.style.background = "#000000";
		message.textContent="TRY AGAIN";			
	}

});}


function changecolor(color){
	for(var i = 0;i<colorsquare.length;i++)
    {
    	colorsquare[i].style.background = color;
    }

}

function pickedcolor1()
{
	 var random = Math.floor(Math.random() * colors.length);
     return colors[random];
  }

function generatecolor(num){
	var arr = []
    for(var i=0;i<num;i++)
    {
       arr.push(randomcolor());

    }

    return arr;
}
function randomcolor()
{
var r = Math.floor(Math.random() * 256);	
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";}


