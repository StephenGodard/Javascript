console.log("bienvenue dans la calculatrice\n quel opération souhaitez vous effectuez ?\n");
var op1=Number(prompt("1:Addition 2:Soustraction 3:multiplication 4:division"));
var nb1=Number(prompt("entrez un nombre"));
var nb2=Number(prompt("entrez un autre nombre"));
if (op1==1){
    var result=nb1+nb2;
    console.log(nb1 , "+" , nb2 , "=" ,result);
}
else if (op1==2){
     var result=nb1-nb2;
    console.log(nb1 , "-", nb2 ,"=",result);
}
else if (op1==3){
     var result=nb1*nb2;
    console.log(nb1 , "*", nb2 ,"=",result);
}
else if (op1==4){
     var result=nb1/nb2;
    console.log(nb1 , "/", nb2 ,"=",result);
}
else{
    console.log("operation non correct!");
}