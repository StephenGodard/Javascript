var personnel={
	nom:"",
	age:0,
	ancienne:0,
	salaire:0,

	Init:function(nom,age,ancienne,salaire){
		this.nom=nom;
		this.age=age;
		this.ancienne=ancienne;
		this.salaire=salaire;
	},

	decrire:function(){
	console.log("vous etes" + this.nom + " vous avez " + this.age +" vous etes dans notre entreprise depuis " + this.ancienne + " et vous ete payé" + this.salaire);
		

	},
};

console.log("Bienvenue sur la fenetre personnel traduit en javascript !  ");
var name=prompt("quel est votre nom?");
var age=Number(prompt("quel age avez vous ?"));
var salary=Number(prompt("quel est votre salaire ?"));
var ancienne=Number(prompt("à partir de quel année avez vous commencé à travailler dans notre entreprise ?"));
ancienne=2018-ancienne;
var employer=Object.create(personnel);
employer.Init(name,age,ancienne,salary);
employer.decrire();