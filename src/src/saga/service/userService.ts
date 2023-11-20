import ApiService from "../../root/rootService"


export const userService =()=>{
    // console.log("here");
    const response=ApiService.get('https://fakestoreapi.com/users');
    //  console.log("response---",response);
    return response;
}