import { DISCOUNT_PERCENTAGE } from '@constants/cart';
import { ICartItem } from '@interfaces/cart';

export const changeItemQuantity = (
  cartItems: ICartItem[],
  itemId: number,
  quantity: number,
): ICartItem[] => {
  let newCartItems = cartItems;
  if (quantity !== 0) {
    newCartItems = cartItems.map(item => ({
      ...item,
      quantity: item.id === itemId ? quantity : item.quantity,
    }));
  } else {
    newCartItems = cartItems.filter(item => item.id !== itemId);
  }

  return newCartItems;
};

export const calculateSubtotal = (cartItems: ICartItem[]) => {
  return cartItems.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
};

// some discount calculation example, need to be replaced with needed business logic
export const calculateDiscount = (cartItems: ICartItem[]) => {
  const subtotal = calculateSubtotal(cartItems);
  const hasDiscont = cartItems.some(item => item.id === 2);

  return hasDiscont ? subtotal * DISCOUNT_PERCENTAGE / 100 : 0;
};
