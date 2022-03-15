export const apiGet =(apiName)=>{

    return(dispatch)=>{
    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(res2=>{
            dispatch({type:"GET_API_NAME",payload:res2[0].name})
        })
    }
}