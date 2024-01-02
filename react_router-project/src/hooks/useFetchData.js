import { useEffect, useState } from "react";

export default function useFetchData(url){
    const [data,setData] = useState({});
    useEffect(()=>{
        async function main(){
            try {
                const res = await fetch(url);
                const jsonRes = await res.json();
                setData(jsonRes);
            } catch (error) {
                console.log("Unable to fetch data");
            }
        }
        main();
    },[url]);
    return data;
}