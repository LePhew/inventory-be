export class ProductDTO {

    name: string;
    description: string;
    sku: string;
    cost: number = 0;
    selling_price: number = 0;
    sold: number = 0;
    type?: string;
    manufacturer_id?: string;
    category_id?: string;
}