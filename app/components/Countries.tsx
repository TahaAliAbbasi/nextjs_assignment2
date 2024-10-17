import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function Countries(props: { name: string ; population: string | number ; capital_city: string ; }){
    
return(
    <>
    <h1>Student data :-</h1>
    <p>Name : {props.name}</p>
    <p>Age : {props.population}</p>
    <p>Salary : {props.capital_city}</p>
    </>
)
}