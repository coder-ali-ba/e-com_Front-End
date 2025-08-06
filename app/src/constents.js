const BaseUrl = "http://localhost:7000/api";

const endPoints = {
    signUp : "/auth/signup",
    logIn : "/auth/login",

    //Items
    addItem : "/item/additem",
    image : "/image/upload",


    //users
    getAllUsers : "/user/getallusers",
    deleteUser : "/user/deluser",
    update : "/user/updateuser"
}

export {
    BaseUrl , 
    endPoints
}