

var initialState ={ 
    Data :[

    ],    
}

export function CustomReducer1(state = initialState, action){

    if(action.type == "AddData"){
        return {...state,
              Data:[...state.Data, action.payload]  
                } 
    }
   

    if(action.type == "DeleteData"){

        return {state, 
             Data : state.Data.filter((item) => item.id !== action.payload) 
        }
              }        
  

   return state;
}