function compterNbVoyelles(mot,taille){
    var nbVoyelles=0;
    for(var i=0;i<taille;i++){
        if (mot[i] === 'a' || mot[i] === 'e' || mot[i] === 'i' || mot[i] === 'o' || mot[i] === 'u' || mot[i] === 'y' ){
            nbVoyelles+=1;
            
        }
        else if(mot[i] === 'A' || mot[i] === 'E' || mot[i] === 'I' || mot[i] === 'O' || mot[i] === 'U' || mot[i] === 'Y'){
            nbVoyelles+=1;
           
        }
    }
    return nbVoyelles;
}
function compterNbConsonnes(mot,taille){
   var nbConsonnes=0;
    for(var i=0;i<taille;i++){
        if (mot[i] !== 'a' || mot[i] !== 'e' || mot[i] !== 'i' || mot[i] !== 'o' || mot[i] !== 'u' || mot[i] !== 'y' ){
            nbConsonnes+=1;
        }
        else if(mot[i] !== 'A' || mot[i] !== 'E' || mot[i] !== 'I' || mot[i] !== 'O' || mot[i] !== 'U' || mot[i] !== 'Y'){
            nbConsonnes+=1;
        }
    }
    return nbConsonnes;
}   
String.prototype.reverse        =       function ()
{
        var n   =  '';
        for( var i=this.length-1; i >= 0; i--)
                n       +=     this.charAt(i);
        return n;
} 
function palyndrome(mot,envers){
    if(mot===envers){
        console.log("il s'agit d'un palyndrome");
        
    }
    else{
        console.log("il ne s'agit pas d'un palyndrome");
    }
}    
function LeetSpeak(mot,taille){
     for(var i=0;i<taille;i++){
        if (mot[i]==='a' === true ){
            mot[i]='4';
        }
        else if(mot[i]==='b' ||mot[i]==='B'){
            mot[i]='8';
        }
        else if(mot[i]==='e' ||mot[i]==='E'){
            mot[i]='3';
        }
        else if(mot[i]==='l' ||mot[i]==='L'){
            mot[i]='1';
        }
        else if(mot[i]==='o' ||mot[i]==='O'){
            mot[i]='0';
        }
        else if(mot[i]==='s' ||mot[i]==='S'){
            mot[i]='5';
        }

}
    return mot;
}

var mot=prompt("veuillez saisir un mot:");
var nbCar=mot.length;
console.log("le mot",mot,"contiens",nbCar,"caractères");
console.log("il s'écrit en minuscule:",mot.toLowerCase());
console.log("il s'écrit en majuscule:",mot.toUpperCase());
var nbVoyelles=compterNbVoyelles(mot,nbCar);
var nbConsonnes=compterNbConsonnes(mot,nbCar);
var envers=mot.reverse();
var LS=LeetSpeak(mot,nbCar);
console.log("il contiens" + " "+nbVoyelles +"Voyelles " + "et " + nbConsonnes + "Consonnes");
console.log("il s'écrit à l'envers",envers);
palyndrome(mot,envers);
console.log("il s'écrit en leet speak",LS);