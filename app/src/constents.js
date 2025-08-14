const BaseUrl = "http://localhost:7000/api";

const endPoints = {
    signUp : "/auth/signup",
    logIn : "/auth/login",

    //Items
    addItem : "/item/additem",
    image : "/image/upload",
    getAllItems : "/item/getAllItems",
    changeStatus : "/item/changestatus",
    deleteItem : "/item/deleteitem",
    updateItem : "/item/updateitem",
    //users
    getAllUsers : "/user/getallusers",
    deleteUser : "/user/deluser",
    update : "/user/updateuser",


    //public
    
}

export {
    BaseUrl , 
    endPoints
}