import * as actions from './ActionTypes'


export const reducer=(state,action)=>{
    
    switch(action.type){

        case actions.ADD_MOVIE_TO_WATCHLIST:
            // retourner objet psk state est un objet
            return {
                ...state,
                watchlist:[action.payload, ...state.watchlist],
              

            };


        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
                // retourner objet psk state est un objet
                return {
                    ...state,
                    watchlist:state.watchlist.filter((movie)=>movie.imdbID !== action.payload.imdbID
                    // action.payload contient un id direct donc pas la peine de faire .imdbId
                    ),   
                };    


        case actions.MOVE_TO_WATCHLIST:
            return {
                ...state,
                watched:state.watched.filter((movie)=>movie.imdbID !== action.payload.imdbID),
                watchlist:[action.payload,...state.watchlist]
            }         
            
            
        case actions.ADD_MOVIE_TO_WATCHED:
                // retourner objet psk state est un objet
                return {
                    ...state,
                    watchlist:state.watchlist.filter((movie)=>movie.imdbID !== action.payload.imdbID
                    ),
                    watched:[action.payload, ...state.watched],
                  
    
                };
    
    
        case actions.REMOVE_MOVIE_FROM_WATCHED:
                    // retourner objet psk state est un objet
                    return {
                        ...state,
                        watched:state.watched.filter((movie)=>movie.imdbID !== action.payload.imdbID
                        ),   
                    };        
        default:
            return state;    
    }
}


// export {reducer};