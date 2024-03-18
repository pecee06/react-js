import {useEffect, useState} from "react"

export default function useConversionRates(code){
    const [rates,setRates] = useState([]);

    useEffect(()=>{
        (async function fetchData() {
            try {
                const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${code}.json`);
    
                const jsonRes = await res.json();
                
                setRates(jsonRes[code]);
            } catch (error) {
                console.log("Unable to fetch data");
            }
        })();
    },[code]);

    return rates;
}
