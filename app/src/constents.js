const BaseUrl = "http://localhost:7000/api";

const endPoints = {
    signUp : "/auth/signup",
    logIn : "/auth/login",

    //Items
    addItem : "/item/additem",
    image : "/image/upload",
    getAllItems : "/item/getAllItems",

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