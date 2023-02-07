import { ICartItem } from '@interfaces/cart';
import Image1 from '@assets/images/cat-street-creme_2000.webp';
import Image2 from '@assets/images/cat-street-olive_2000.webp';

// TODO: Not supposed to be here, should be from backend
export const DEFAULT_ITEMS: ICartItem[] = [
  {
    id: 1,
    name: 'Bouclé Bungalow “Creme” Cover',
    image: Image1,
    price: 239,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Replacement Cover in “Catnip”',
    image: Image2,
    price: 129,
    quantity: 1,
  },
];
export const DISCOUNT_PERCENTAGE = 5;
