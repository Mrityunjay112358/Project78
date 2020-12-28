var arrayimg = [
    "mother.jpg",
    "brother.png",
    "brother.jpg",
    "father1.png"
   ];
var array_name = [
    "Mother",
    "Me",
    "Brother",
    "Father"
];
var i = 0;
function nextslide()
{

    
    document.getElementById("name1").innerHTML=array_name[i];
    

    document.getElementById("img1").src=arrayimg[i];
    i++;
    }

   