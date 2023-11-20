import axios from "axios";

class Api {
    public get(url:string) {
       console.log("url",url)  
    return axios.get(url);
    } 
    public post(url:string,params:object){
      console.log("url",url,'param to pass',params)  
      return axios.post(url,params)
    }
}
const ApiService=new Api();
export default ApiService;