
import { IProduct } from "@/interfaces/IProduct";
import axios from "axios"


export const getProducts =async():Promise<IProduct[]>=>{
   
    try {
        const response=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
        if(!response.data){
            throw new Error("not products found")
        }
        console.log(response);
        
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("not products found")
    }
    
}