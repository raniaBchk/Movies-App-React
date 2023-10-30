import React, { useReducer, useContext,useEffect } from 'react';
import { createContext } from 'react';
import  {reducer}  from './Reducer';


// Etape 1 : Créer initialValue

const initialState = {
    watchlist:localStorage.getItem("watchlist")? JSON.parse(localStorage.getItem("watchlist")):[],
    watched:localStorage.getItem("watched")? JSON.parse(localStorage.getItem("watched")):[],
}

// Etape 2 : Créer un context

export const GlobalContext = createContext(initialState);


   

// Etape 3: creer provider (hada li ya7tawi ga3 l'application )

export const ContextProvider=({children})=>{

    // Etape 5 : creer state useReducer
    const [state,dispatch]=useReducer(reducer, initialState) // reducer hiya la fonction li fiha kolech
   
    useEffect(()=>{
        localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
        localStorage.setItem("watched",JSON.stringify(state.watched))

    },[state])
    return (
        // hadou value li nes7a9ohom fel app dyalna dernahom f un objet
        
        <GlobalContext.Provider value={{
            watchlist:state.watchlist,
            watched:state.watched, 
            MoviesDispatch: dispatch}} > 
        
        {children}
        </GlobalContext.Provider>
    )
}

// Etape 4 : export context to wrapp all component

export default ContextProvider;

// Etape 6 : custom hook useMovieContext pour acceder au donnees de hook nwelou ndiro appel lih berk 

export const useMovieContext=()=>{
    return useContext(GlobalContext);
}




// Etape 7 nroh l app.js ndir import l ContextProvider w ndirha dakhel routes bch l'app ta3na tweli ta3refha


// Etape 8 creer reducer function f un autre fichier pr eviter khalouta ( Reducer.jsx) => best practise