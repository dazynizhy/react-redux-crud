const Reducer = (state = [], action) => {
    switch(action.type) {
        case 'SELECT_ALL' :
            //console.log('all' , action.check)
            return state.map((user)=>action.check !==null  ? {...user,isCheck: action.check} : user)
        case 'RESET' :
            return state.map((user)=>user.isCheck === true  ? {...user,isCheck:false} : user)
        case 'ADD_USER':
            console.log('dfsdf')
            return state.concat([action.data])
        case 'DELETE_USER' :
            return state.filter((user)=>user.id !== action.id )
        case 'DELETE_GROUP' :
            return state.filter((user)=>user.isCheck === false )
        case 'EDIT_USER' :
            return state.map((user)=>user.id === action.id  ? {...user,editing:!user.editing} : user)
        case 'CHECK_USER_DELETE' :
            return state.map((user)=>user.id === action.id  ? {...user,isCheck:!user.isCheck} : user)
        case 'UPDATE' :
           return state.map((user) =>{
                if(user.id === action.id) {
                    return {
                        ...user,
                        firstName: action.data.newFirstname,
                        lastName: action.data.newLastname,
                        editing: !user.editing
                    }
                }
                else return user
           })
        default:
            return state
    }
}

export default Reducer;