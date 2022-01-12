import { ProductState } from "src/enums/ProductState";

export class ProductDTO {

    name: string;
    description: string;
    sku: string;
    cost: number = 0;
    selling_price: number = 0;
    sold: number = 0;
    state: ProductState;
    stock?: number = 0;
    manufacturer_id?: string;
    category_id?: string;
}