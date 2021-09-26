var rqturl=new XMLHttpRequest();
rqturl.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
rqturl.send();
rqturl.onload=()=>{
    var data=JSON.parse(rqturl.response);
    for(var val of data){
    console.log(val.name,val.region,val.subregion,val.population);//  print all countries name, region, sub region and population

}
}