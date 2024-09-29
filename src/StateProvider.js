
import React,{ createContext,useContext,useReducer} from "react";

//prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and providde the Data layer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}

    </StateContext.Provider>
);

//pull inforamtion from the data layer
export const useStateValue=()=> useContext(StateContext);