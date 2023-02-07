export interface ICartItem {
  id: number,
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface ICartProps {
  includeCheckout?: boolean;
  includeProposal?: boolean;
}

export interface ICartItemProps extends ICartItem {
  onChange: (itemId: number, quantity: number) => void;
}

export interface ITotalsProps {
  subtotal: number;
  shipping?: number | null;
  discount?: number;
  includeCheckout: boolean;
}
