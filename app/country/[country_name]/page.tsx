// dynamic routing

import { Span } from "next/dist/trace";



export default function country_name({params}:{params:{country_name:string,population:number|string,capital_city:string}}){
    const countries ={
        pakistan : {
            name:"Pakistan",
            population:234232342,
            capital:"Islamabad"
        },
        usa:{
            name:"USA",
            population:3423424,
            capital:"Washington dc"
        },
        china:{
            name:"China",
            population:2342323,
            capital:"Beging"
        },
        japan:{
            name:"Japan",
            population:2342342,
            capital:"Tokyo"
        },
        canada:{
            name:"Canada",
            population:3242424234,
            capital:"Otawa"
        }
    }
       if (params.country_name == "japan") {
        params.country_name = countries.japan.name ;
        params.population = countries.japan.population ;
        params.capital_city = countries.japan.capital;
    }
    else if (params.country_name == "canada") {
        params.country_name = countries.canada.name ;
        params.population = countries.canada.population ;
        params.capital_city = countries.canada.capital;
    }
    else if (params.country_name == "pakistan") {
        params.country_name = countries.pakistan.name ;
        params.population = countries.pakistan.population ;
        params.capital_city = countries.pakistan.capital;
    }
    else if (params.country_name == "china") {
        params.country_name = countries.china.name ;
        params.population = countries.china.population ;
        params.capital_city = countries.china.capital;
    }
    else if (params.country_name == "usa") {
        params.country_name = countries.usa.name ;
        params.population = countries.usa.population ;
        params.capital_city = countries.usa.capital;
    }
    else{
        params.population = "Sorry we do not have data of this country" ;
        params.capital_city = "Sorry we do not have data of this country" ;
       }
    
    
    return(
        <div>
        <h1>Country details :-</h1>
        <p>Country name : {params.country_name}</p>
        <p>Population : <span style={{color:"red"}}>{params.population} </span> </p>
        <p>Capital city : <span style={{color:"red"}}>{params.capital_city}</span> </p>
        </div>
    )
}