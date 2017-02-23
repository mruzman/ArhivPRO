var picNum=1;
prikazi(picNum);


function prikazi(n){
    var i=0;
    var x=document.getElementsByClassName("preuzeto");
    for(i=0;i<x.length;i++){
        x[i].style.display = "none";
    }
    picNum++;
    if(picNum>x.length) {picNum=1;}
    x[picNum-1].style.display ="block";
    setTimeout(prikazi, 2000);
}

