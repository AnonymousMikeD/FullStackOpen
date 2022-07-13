import React from "react";

const Country=({country, showInfo})=><>{country.name.common} <button onClick={()=>showInfo(country.name.common)}>show</button><br/></>

export default Country;

export const CountryDetails=({country})=>{
    const LanguageList = Object.values(country.languages)
return(
<>
<h1>{country.name.common}</h1>
<p>capital {country.capital[0]}</p>
<p>area {country.area}</p>
<h3>languages:</h3>
{LanguageList.map((l)=> <li key={l}>{l}</li>)}
<br />
<img src={country.flags.png} alt="Flag not available"/>
</>
);
}