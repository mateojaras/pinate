

export const ProductoReducer=(state = [],action)=> {
    switch(action.type){
        case('ACTUALIZARCATEGORIA'):
            return action.payload
        default:
            return state;
    }
}
