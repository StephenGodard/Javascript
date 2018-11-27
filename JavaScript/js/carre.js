function square(nb){
    carre=nb*nb;
    return carre;
}
console.log("bonjour sur la calculatrice de fonction !");
nbr=Number(prompt("entrez un nombre et je vous donnerais son carrée"));
carre=square(nbr);
console.log("le carrée de ",nbr,"est",carre);

