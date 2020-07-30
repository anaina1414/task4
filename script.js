function bulbLight()
{
    var image= document.getElementById('bulb');
       if(image.src.match("./bulb2.png"))
          {
            image.src="./glow2.png";
          }
        else
          {
            image.src="./bulb2.png";
          }
}
