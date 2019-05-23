var pics=[ "1.jpg","2.jpg","3.jpg","4.jpg"];

var btn=document.querySelector("button");
var img=document.querySelector("img");
var count=1;

btn.addEventListener("click", function(){
if(count === 4)
{
	count=0;
}	
img.src=pics[count]
count++;

});