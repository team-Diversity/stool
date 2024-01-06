import React, { useContext, useState } from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext() = ({children}) => {

    return (
        <GlobalContext.Provider value={{
    
        }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

