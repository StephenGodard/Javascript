var Chien={
    nom:"",
    race:"",
    taille:0,
   Init:function(nom,race,taille){
       this.nom=nom;
       this.race=race;
       this.taille=taille;
   } ,
    decrire:function(){
        var description=this.nom + " est un " + this.race +" mesurant " + this.taille +" cm";
        return description;
    },
    aboie:function(){
        if(this.race==="Mâtin de Naples"){
        var aboie="waf waf !";
        return aboie;
        }
        else{
            var aboie="kali ! kali !";
        return aboie;
        }
    },
};
var crokdur=Object.create(Chien);
crokdur.Init("Crokdur","Mâtin de Naples",75);
console.log(crokdur.decrire());
console.log(" tiens un chat! " + crokdur.nom + " aboie:" + crokdur.aboie());
var pupuce=Object.create(Chien);
pupuce. Init("Pupuce","Bichon",22);
console.log(pupuce.decrire());
console.log(" tiens un chat! " + pupuce.nom + " aboie:" + pupuce.aboie());