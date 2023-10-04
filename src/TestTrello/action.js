

export function Add(Data){
    return{
        type: "AddData" ,
       payload : Data
    }
}

export function Delete(id){
    return{
        type: "DeleteData" ,
       payload : id
    }
}


