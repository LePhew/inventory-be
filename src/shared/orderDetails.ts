import { OrderService } from "src/core/order/order.service";


export class OrderDetailDTO {

    order_id: string;
    product_id: string;
    amount: string;
    created_at: Date;
    updated_at: Date;

}

export class OrderDetailsService {

    constructor(
        private _orderService: OrderService
    ) { }

}