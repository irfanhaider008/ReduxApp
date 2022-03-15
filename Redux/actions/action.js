export const anotherName = (name)=>{

    return {
        type:'CHANGE_NAME',
        payload:name
    }
}


export const anotherWish = (name)=>{

    return {
        type:'CHANGE_WISH',
        payload:name
    }
}