import ApiService from "../../root/rootService"


export const productService =(params:object)=>{
    // console.log("params",typeof params);
    const response=ApiService.post('https://fakestoreapi.com/products',params);
    //  console.log("prodcut response---",typeof response);
     return response;
    //  response.then((res)=>{
    //     console.log("res==========",res);    
    //     return res;
    //  })
    
}