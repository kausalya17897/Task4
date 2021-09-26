var rqturl=new XMLHttpRequest();
rqturl.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
rqturl.send();
rqturl.onload=()=>{
    var data=JSON.parse(rqturl.response);
    for(var val of data){
    console.log(val.flag);// display all the country flags in console
}
}