function minimum(nb1,nb2){
    if (nb1<nb2){
        return nb1;
    }
    else{
        return nb2;
    }
}
console.log("donnez moi 2 nombres je vous trouverais le minimum");
nb1=Number(prompt("premier nombre:"));
nb2=Number(prompt("second nombre:"));
min=minimum(nb1,nb2);
console.log("le plus petit est",min);