var Dday=prompt("quel jours on est aujourd'hui?");
switch(Dday){
case "Lundi":
        console.log("demain nous serons Mardi");
        break;
case "Mardi":
        console.log("demain nous serons Mercredi")
        break;
case "Mercredi":
        console.log("demain nous serons Jeudi");
        break;
case "Jeudi" :
        console.log("demain nous serons vendredi");
        break;
case "Vendredi":
        console.log("demain nous serons Samedi");
        break;
case "Samedi":
        console.log("demain nous serons dimanche");
        break;
case "dimanche":
        console.log("demain nous serons lundi");
        break;
        
    default:
        console.log("date incorrect");

}