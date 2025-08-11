import { IClothe } from "@/interfacecs/IClothe";
import { getClothes } from "./getClothes";

export const getProductById = async (id: number): Promise<IClothe> => {
    const clothes = await getClothes();
    const product = clothes.find((clothe: IClothe) => clothe.id === id);

    if (!product) throw Error(`Product with id ${id} not found`);

    return product;
};