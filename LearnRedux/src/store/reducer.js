import * as actionType from  './action';

const initialState={
    persons:[],
}


const reducer= (state= initialState, action)=>{
    console.log(state.persons);
    switch(action.type){
        case (actionType.ADD):
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
                age: Math.floor( Math.random() * 40 )
            };
            return {
                ...state,
                persons: state.persons.concat(newPerson),
            };
        case (actionType.DELETE):
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId),
            }
    }
    return state;
}

export default reducer; 