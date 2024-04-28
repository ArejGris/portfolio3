 const state={
mode:true,
color:"red",
prev:'Contact',
next:"Portfolio"
}
export default function Reducers(initialState=state,action){
    let state
    switch (action.type) {
        case 'COLOR':
           state={
            ...initialState,
            color:action.data
           }
            break;
        case 'MODE':
            state={
                ...initialState,
                mode:action.data
               }
            break;
        case 'PREV':
                state={
                    ...initialState,
                    prev:action.data
                   }
                break;
        case 'NEXT':
                state={
                    ...initialState,
                    next:action.data
                   }
                break;
        default:
      state= initialState;
  
            break;
    }
    return state
}