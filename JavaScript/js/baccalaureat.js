console.log("bonjours jeune candidat!\n");
nom=prompt("quel est ton nom?\n");
prenom=prompt("quel est ton prénom?\n");
console.log("bonjour" ,nom, prenom);
Serie=prompt("quel baccalaureat prépare-tu",prenom,"?");
nbrNotes=Number(prompt("Combien de notes souhaite-tu rentrer",prenom,"?"));
somme=0;
for(i=0;i<nbrNotes;i++){
 note=Number(prompt("note:"));
    somme+=note;
}
result=somme/nbrNotes
if (result< 10 && result> 8){
    console.log(result,"rattrapage tu peux encore y arriver courage",prenom, "!");
}
else if (result<8){
  console.log(result,"malheuresement",prenom," tu n'a pas ton baccalaureat",Serie,"retente ta chance l'année prochaine !");  
}
else if(result >10 && result< 12){
    console.log(result,"felicitation", prenom,"tu as décrocher ton baccalaureat",Serie);
    
}
else if(result>12){
      console.log(result,"felicitation", prenom,"tu as décrocher ton baccalaureat",Serie, "avec une mention ! ");
}
