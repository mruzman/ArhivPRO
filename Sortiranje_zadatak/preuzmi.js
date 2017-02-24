var item = array();

function proRectoVerso(string1,string2) {
   // if() return 1; ako je zadovoljeno
    //else return 2; ako nije zadovoljeno
}

function jacinaStringa(varijabla) {
    if ((varijabla.match(/^.*Cf$/)) || (varijabla.match(/^Cf.*$/))) {
        return 1;
    } else if ((varijabla.match(/^.*PDf$/)) || (varijabla.match(/^PDf.*$/))) {
        return 2;
    } else if ((varijabla.match(/^.*FLf$/)) || (varijabla.match(/^FLf.*$/)))
        return 3;
    else if ((varijabla.match(/^.*EPf$/)) || (varijabla.match(/^EPf.*$/))) //EPf
        return 4;
    else if ((varijabla.match(/^.*EPb$/)) || (varijabla.match(/^EPb.*$/)))
        return 6;
    else if ((varijabla.match(/^.*FLb$/)) || (varijabla.match(/^FLb.*$/)))
        return 7;
    else if ((varijabla.match(/^.*PDb$/)) || (varijabla.match(/^PDb.*$/)))
        return 8;
    else if ((varijabla.match(/^.*Cb$/)) || (varijabla.match(/^Cb.*$/)))
        return 9;
    else if ((varijabla.match(/^.*S$/)) || (varijabla.match(/^S.*$/)))
        return 10
    else
        return 5;
}


function sortiraj() {
    var i, j, splitano1, splitano2, pomocna;
    for (i = 0; i < item.length; i++) {
        splitano1 = explode(".", item[i]);
        pomocna1 = jacinaStringa(splitano1[1]);
        for (j = item.lenght; j > 0; j--) {
            splitano2 = explode(".", item[j]);
            pomocna2 = jacinaStringa(splitano2[1]);
            if((parseInt(pomocna1)==5)&&(parseInt(pomocna2)==5)){
                //tu ide funkcija za provjera broja..
            }else{
            if ((parseInt(pomocna2)) > (parseInt(pomocna1))) {
                continue;
            } else if ((parseInt(pomocna1)) > (parseInt(pomocna2))) {
                pomocna = item[i];
                item[i] = item[j];
                item[j] = pomocna;
            } else {
                if(proRectoVerso(splitano1[1],splitano2[1])==1){//tu treba jedna provjera i ako je tocna onda vrni1 i naprai sortanje
                    pomocna = item[i];
                    item[i] = item[j];
                    item[j] = pomocna;
                }
                else{
                    continue;
                }
            }
        }
        }
    }
}

$(document).ready(function () {
    var i;
    $.get("index.php", {source: "dohvat_datoteke"}, function (res) {
        res = JSON.parse(res);
        for (i = 0; i < res.length; i++) {
            item.assign(res[i]);
        }
    });
});

$(document).on("click", "#gumb_nesort", function(){
    console.log("Tu smo");
});

$(document).on("click", "#gumb_sortiraj", function (){
   console.log("Tu smo");
});






