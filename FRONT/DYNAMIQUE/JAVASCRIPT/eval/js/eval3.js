var bouton3= document.getElementById("btn3");
bouton3.addEventListener("click",clickbtn3);
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
document.getElementById("resultat3").innerHTML=tab[0]+", "+tab[1]+", "+tab[2]+", "+tab[3]+", "+tab[4]+", "+tab[5]+", "+tab[6]+", "+tab[7]+", "+tab[8]+", "+tab[9]
for (var i = 0; i <tab.length; i++) 
{
   console.log(tab[i]);
}


function clickbtn3()
{
    while(tab[0]!="")
    {
        var nom=prompt("Donnez un nom");
        if(nom!=tab)
        {
            alert("nom non reconnu");
        }
        else
        {
            var pos= tab.indexOf(nom);
            var removed= tab.splice(pos,1);
            tab.push("");
        }
        document.getElementById("resultat3").innerHTML=tab[0]+", "+tab[1]+", "+tab[2]+", "+tab[3]+", "+tab[4]+", "+tab[5]+", "+tab[6]+", "+tab[7]+", "+tab[8]+", "+tab[9]
        for (var i = 0; i <tab.length; i++) 
        {
        console.log(tab[i]);
        }
    }
}