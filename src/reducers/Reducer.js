const Reducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_USER':
            return state.concat([action.data])
        case 'DELETE_USER' :
            return state.filter((user)=>user.id !== action.id )
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