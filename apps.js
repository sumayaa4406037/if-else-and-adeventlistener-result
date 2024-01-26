var bangla=Number(prompt("Enter Bangla Mark:"));
var english=Number(prompt("Enter English Mark:"));
var math=Number(prompt("Enter Math Mark:"));
var islam=Number(prompt("Enter Islam Mark:"));
var physics=Number(prompt("Enter Physics Mark:"));
var total=bangla+english+math+islam+physics;
if(bangla<33 || english<33 || math<33 || islam<33 || physics<33){
    document.write('F');
}
else if(total>=320){
    document.write('A+');
}
else if(total>=280){
    document.write('A');
}
else if(total>=240){
    document.write('A-');
}
else if(total>=200){
    document.write('B');
}
else if(total>=160){
    document.write('C');
}
else if(total>=132){
    document.write('D');
}
