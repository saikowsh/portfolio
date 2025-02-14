import { combineReducers } from "redux";

const initialState = {
    AddResult : 0, Subresult : 0, DivResult : 0, PowerResult : 0, ModResult : 0, MultiResult : 0
}

const addReducer = (state = initialState.AddResult , action) =>{
    switch(action.type){
        case 'ADDITION' :
            return{
                ...state,
                AddResult : state.AddResult + action.payload,
            }
            default:
                return state;
    }
}

const subReducer = ( state = initialState.Subresult, action) =>{
    switch(action.type){
        case 'SUBTRACT' :
            return{
                ...state,
                Subresult : action.payload - state.Subresult,
            }
            default:
                return state;
    }
}

const multiReducer = ( state = initialState.Subresult,action) =>{
    switch(action.type){
        case 'multiplication' :
            return{
                ...state,
                MultiResult : action.payload - state.MultiResult,
            }
            default:
                return state;
    }
}

const DIVReducer = ( state = initialState.Subresult,action) =>{
    switch(action.type){
        case 'division' :
            return{
                ...state,
                DivResult : action.payload - state.DivResult,
            }
            default:
                return state;
    }
}

const powerReducer = ( state = initialState.Subresult,action) =>{
    switch(action.type){
        case 'power' :
            return{
                ...state,
                PowerResult : action.payload - state.PowerResult,
            }
            default:
                return state;
    }
}

const modReducer = ( state = initialState.Subresult,action) =>{
    switch(action.type){
        case 'modules' :
            return{
                ...state,
                 ModResult : action.payload - state.ModResult,
            }
            default:
                return state;
    }
}


const rootReducer = combineReducers({
    add : addReducer,
    subtract : subReducer,
    multiplication :multiReducer,
    division :DIVReducer,
    modules :modReducer,
    power  :powerReducer,
});


export default rootRe