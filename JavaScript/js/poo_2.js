var Personnage={
    
    //initialise le joueur
    InitPerso:function(nom,sante,force){
    this.nom=nom;
    this.sante=sante;
    this.force=force;
    this.xp=0;
    this.gils=10;
    this.keys=1;
    },
    //Renvoie la description du joueur

    attaquer:function(cible){
        if(this.sante>0){
            var degats=this.force;
            console.log(this.nom+ " attaque " + cible.nom + " et lui fait " + degats +" points de dégâts");
            cible.sante=cible.sante-degats;
                if(cible.sante>0){
                console.log(cible.nom +" a encore " + cible.sante + " points de vies");
                }
                 else{
                 cible.sante=0;
                 console.log(cible.nom+" est mort!");
               }
        }
        else{
            console.log(this.nom +" ne peut pas attaquer: il est mort...");
        }
        
    },
    
};
// Création héros
var joueur=Object.create(Personnage);
joueur.InitPerso("Aurora",150,35);

//renvoie description joueur
joueur.decrire=function(){
    var description=this.nom +" a " + this.sante + " points de vie, " + this.force +" en force,  " + this.xp +" points d'expériences, " + this.gils +" pièces d'or et " + this.keys + " clés";
    return description;
};
var perso2=Object.create(joueur);
perso2.InitPerso("Glacius",130,30);
console.log(joueur.decrire());
console.log(perso2.decrire());
//combat un adversaire
joueur.combatre=function(Adversaire){
        this.attaquer(Adversaire);
        if(Adversaire.sante===0){
            console.log(this.nom+ " a tué " + Adversaire.nom+" et gagne "+Adversaire.valeur +" points d'expériences, ainsi que " + Adversaire.gils +"pièces d'or et " + Adversaire.keys +" clés");
        this.xp+=Adversaire.valeur;
        this.gils=this.gils+Adversaire.gils;
        this.keys=this.keys+Adversaire.keys;
        }
    };

// Création vilain
var Adversaire=Object.create(Personnage);
Adversaire.initAdversaire=function(nom,sante,force,race,valeur){
    this.InitPerso(nom,sante,force);
    this.race=race,
    this.valeur=valeur;
};
var monstre=Object.create(Adversaire);
monstre.initAdversaire("ZogZog",40,20,"ourse",10);

console.log("un affreux monstre arrive: c'est un " + monstre.race + " nommé " + monstre.nom);
monstre.attaquer(joueur);
monstre.attaquer(perso2);
joueur.combatre(monstre);
perso2.combatre(monstre);

console.log(joueur.decrire());
console.log(perso2.decrire());