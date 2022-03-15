const istate={
    name:["Ali"],
    wishes:['Coding'],
    apiName:"Asif"
}
const reducer =(state=istate,action) =>{
    console.log("Action",action)

    if(action.type==='CHANGE_NAME'){
        return{
            ...state,
            name:action.payload
        } 
    }

    if(action.type==='CHANGE_WISH'){
        return{
            ...state,
            wishes:action.payload
        } 
    }

    if(action.type==='GET_API_NAME'){
        return{
            ...state,
            apiName:action.payload
        } 
    }


   
return state;




}

export default reducer;