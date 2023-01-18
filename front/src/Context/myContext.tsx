import React, { useContext } from "react";

export interface ResultContext  {
        resultState: {sunrise: string, sunset:string, day_length: string}, 
        setResultState: React.Dispatch<React.SetStateAction<{sunrise: string, sunset:string, day_length: string}>>
        
    }
export const myContext = React.createContext<null | ResultContext>(null);

// export const useMyContext = () => useContext(myContext);