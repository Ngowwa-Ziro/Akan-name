var maleNames=["Kwasi","Kwadwo","Kwabena","Kwafu","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adowa","Abenau","Akua","Yaa","Afua","Ama"];
var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getName(){
    var day=parseInt(document .getElementById("day").value);
    var month=parseInt(document .getElementById("month").value);
    var year=parseInt(document .getElementById("year").value);
    var male= document.getElementById("male");
    var female= document.getElementById("female");
 if(day<=0||day>31){
    alert("please enter a valid date!")
 }
 else if(month<=0||month>12){
     alert("please enter a valid month!")
 }
 var day =new Date(year + "/" + month + "/" + day);
var birthDay=day.getDay();
if(male.checked==true){
document.getElementById("result").innerHTML=
"You were born on a " + daysOfWeek[birthDay]+ " your Akhan name is "+ maleNames[birthDay]
}