import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import HomePage from '@pages/Home';
import CheckoutPage from '@pages/Checkout';
import { DEFAULT_ITEMS } from '@constants/cart';
import { CartContext } from '@contexts/cart';
import { changeItemQuantity } from '@utils/cart';

import '@styles/index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

function App() {
  const [cartItems, setCartItems] = useState(DEFAULT_ITEMS);
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const onItemChange = (itemId: number, quantity: number) => {
    const newCartItems = changeItemQuantity(cartItems, itemId, quantity);

    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, onItemChange, shippingCost, setShippingCost }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
