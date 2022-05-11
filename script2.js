var mySlide = document.getElementById("Image");
var slideArray = ["Images/Rectangle 11.png", "Images/Rectangle 14.png", "Images/Rectangle 16.png", "Images/Rectangle 15.png"];

var slideIndex = 0;
function changeSlide() {
mySlide.setAttribute("src",slideArray[slideIndex]);
slideIndex++;
if(slideIndex>=slideArray.length){
slideIndex = 0;
document.getElementById("Image").innerHTML=slideArray
}

}
setInterval(changeSlide,3000);