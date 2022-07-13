import React from "react";
import Country, {CountryDetails} from "./Country";

const Search = ({ country, search }) => {
    if (!search) {
        return country;
    }
    return country.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
}

export default Search;

export const Handle=({search, setSearch})=>{
    
    const searchHandle=(e)=>{
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    return <p>find countries <input value={search} onChange={searchHandle}/></p>;
}

export const ListChecker=({country, search,showInfo})=>{
    if(search.length===0){
        return <p></p>
    }
    const NewList = country.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
    if(NewList.length>10){
       return <p>Too many matches, specifty another filter</p>
    }
    if(NewList.length<=10){
        if(NewList.length===1){
            return NewList.map(country=> <CountryDetails key={country.idd.suffixes[0]} country={country}/>)
        }
        return NewList.map(country=> <Country key={country.idd.suffixes[0]} country={country} showInfo={showInfo}/>)
             
            
        

    }


}