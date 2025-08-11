
import { IClothe } from "@/interfacecs/IClothe";
import axios from "axios"


export const getClothes =async():Promise<IClothe[]>=>{
   
    try {
        const response=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/clothes`)
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