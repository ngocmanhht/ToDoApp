export const addList =(data)=>
{
    return {
        type: 'ADD_LIST',
        payload:data
    }
}
export const changeStatus =(data)=>
{
    return {
        type: 'CHANGE_LIST_STATUS',
        payload:data
    }
}
export const deleteList =(data)=>
{
    return {
        type: 'DELETE_LIST',
        payload:data
    }
}