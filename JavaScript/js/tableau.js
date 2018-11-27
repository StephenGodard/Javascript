var mousquetaires=["Arthos","Porthos","Aramis"];
console.log("voici les trois mousquetaires:")
for(var i=0;i<mousquetaires.length;i++){
    console.log(mousquetaires[i]);
}
var mousquetaire="artagnan";
mousquetaires.push(mousquetaire);
console.log("à présent ils sont quatre !")
for(var i=0;i<mousquetaires.length;i++){
    console.log(mousquetaires[i]);
}