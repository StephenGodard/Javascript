var ComptesBancaire={
    nom:"",
    solde:0,
    Init:function(nom,solde){
        this.nom=nom;
        this.solde=solde;
             
    },
        decrire:function(){
        var description="Titulaire: " + this.nom + " solde: " + this.solde + " euros";
        return description;
    },

    debiter: function(montant){
        this.solde=this.solde-montant;
    },
};

var CompteEpargne={
    InitCE:function(nom,solde,epargne){
        ComptesBancaire.Init(nom,solde);
        this.epargne=epargne;
        
    },
    
    crediter:function(montant){
        this.solde=this.solde+montant;
    },
    decrire:function(){
        ComptesBancaire.decrire();
    },
    ajouterInterets:function(){
        this.solde=this.solde*1.05;
    },
};

var compte1=Object.create(ComptesBancaire);
compte1.Init("Alex",100);
var compte2=Object.create(CompteEpargne);
compte2.InitCE("marco",50,0.05);

console.log("Voici l'état actuel des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());
var montant=Number(prompt("Entrez le montant à transférer entre les comptes"));
compte1.debiter(montant);
compte2.crediter(montant);
//Calcul et ajoute les intérêts au solde du compte
compte2.ajouterIntérêt();
console.log("Voici l'état final des comptes après transfert et calcul d'intéret:");
console.log(compte1.decrire());
console.log(compte2.decrire());

