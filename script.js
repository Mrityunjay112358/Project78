var arrayimg = [
    "cover.jpg",
    "mother.jpg",
    "brother.png",
    "brother.jpg",
    "father.jpg",
   ]
var name = [
    Family,
    Mother,
    Me,
    Brother,
    Father
]

function nextslide(){
    document.getElementById("name1").src=name[i];
    i++;
    document.getElementById("img1").src=arrayimg[i];
    i++;
   }