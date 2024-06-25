export class FilterOrderDto {
  weight: number;

  width: number;

  shipping_type: string;

  sender: string;

  order_number?: string;

  recipient?: string;

  order_cancellation?: boolean;

  createdAt?: Date;
}
