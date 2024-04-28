export function updateColor(data){
return {
    type:'COLOR',
    data
}
}
export function updateMode(data){
    return{
        type:'MODE',
        data
    }
}
export function updatePrev(data){
   
    return{
        type:'PREV',
        data
    }
}
export function updateNext(data){
   
    return{
        type:'NEXT',
        data
    }
}