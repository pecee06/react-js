import { createContext, useContext } from "react";

// Creating context
const structure = {
    url: "",
    title: "",
    desc: "",
    roundImg: false
};

const CardContext = createContext(structure);

// Creating function for retriving information from context
const useCard = ()=>{
    return useContext(CardContext);
}

export {CardContext,useCard};