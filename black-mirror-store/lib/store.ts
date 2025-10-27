import { create } from 'zustand';
import { CartItem, Product } from './types';

interface StoreState {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: () => number;

  // Easter Eggs
  foundCodes: Set<string>;
  addFoundCode: (code: string) => void;
  easterEggMessage: string | null;
  setEasterEggMessage: (message: string | null) => void;

  // Rating System
  userRating: number;
  setUserRating: (rating: number) => void;

  // Surveillance
  mouseMovements: number;
  incrementMouseMovements: () => void;
  timeOnSite: number;
  incrementTimeOnSite: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
  // Cart
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
  cartTotal: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  // Easter Eggs
  foundCodes: new Set(),
  addFoundCode: (code) =>
    set((state) => ({
      foundCodes: new Set([...state.foundCodes, code]),
    })),
  easterEggMessage: null,
  setEasterEggMessage: (message) => set({ easterEggMessage: message }),

  // Rating System
  userRating: 4.2,
  setUserRating: (rating) => set({ userRating: rating }),

  // Surveillance
  mouseMovements: 0,
  incrementMouseMovements: () =>
    set((state) => ({ mouseMovements: state.mouseMovements + 1 })),
  timeOnSite: 0,
  incrementTimeOnSite: () =>
    set((state) => ({ timeOnSite: state.timeOnSite + 1 })),
}));
