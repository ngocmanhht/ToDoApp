const initialState =[
   
        {id:1, name: 'LEARN E', completed: true},
        {id:2, name: 'LEARN JS', completed: true},
        {id:3, name: 'LEARN M', completed: true}

    
]
export default ( state= initialState, action)=>
{
    switch(action.type)
    {
        case 'ADD_LIST':
            return[
                ...state,  
                action.payload
            ]
            case 'CHANGE_LIST_STATUS':  
            return  state.map((item) => {
                if (item.name.toLowerCase() === action.payload.name.toLowerCase()) {
                  return {
                    ...item,
                    complete: action.payload.complete
                  };
                }
                return item;
              });
            case 'DELETE_LIST':
                return state.filter((item) => item.name !== action.payload.name)

            default:
                return state;
            
    }
}