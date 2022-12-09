1.Comapare two JSON have the same properties without order

var obj1 = {name:"person1" ,age:5}
var obj2 = {age:5, name:"person1"}
if (obj1 == obj2) {
    console.log("false");
}
else{
  console.log("true")
}


2.Use the rest countries API URL==> https://restcountries.com/v3.1/all and display the all countries flags on the console

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
//console.log(request);
request.onload = function () {
    var data = request.response;
    //console.log(JSON.parse(data));
    var result = JSON.parse(data);
    for (var i = 0; i <result.length; i++) {
        console.log(result[i].flags);
        
}
}

3.Use the same rest countries nd print all countries names,region,subregion and populations on the console

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
//console.log(request);s
request.onload = function () {
    var data = request.response;
    //console.log(JSON.parse(data));
    var result = JSON.parse(data);
    for (var i = 0; i <result.length; i++) {
        console.log("name :"+ result[i].name.common,"region :"+ result[i].region,"subregion :"+ result[i].subregion,"populaion :"+ result[i].population);     
}
}

