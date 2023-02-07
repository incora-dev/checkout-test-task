import { ICartItem } from '@interfaces/cart';
import { createContext } from 'react';

export const CartContext = createContext<ICartContext>({
  cartItems: [] as ICartItem[],
  onItemChange: (itemId: number, quantity: number) => {},
  shippingCost: null,
  setShippingCost: (value: number | null) => {},
});

interface ICartContext {
  cartItems: ICartItem[],
  onItemChange: (itemId: number, quantity: number) => void,
  shippingCost: number | null,
  setShippingCost: (value: number) => void,
}
