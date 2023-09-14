import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { Product } from "../Types";


interface CartItem {
  product: Product;
  quantity: number;
}

// Define the state of the cart as an array of cart items
interface CartState extends Array<CartItem> {}

// Define possible actions that can be performed on the cart
interface CartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "UPDATE_QUANTITY" | "LOAD_CART";
  product?: Product;
  productId?: number;
  quantity?: number;
  cart?: CartState;
}

// Define the shape of the CartContext using an interface
interface CartContextType {
  cart: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

// Create a context to manage the cart state and actions
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Define the reducer function to handle cart actions
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      // Check if the product is already in the cart
      const existingItemIndex = state.findIndex(
        (item) => item.product.id === action.product!.id
      );
      if (existingItemIndex !== -1) {
        // If it's already in the cart, increase the quantity
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      // If not in the cart, add it as a new item
      return [...state, { product: action.product!, quantity: 1 }];

    case "REMOVE_ITEM":
      // Remove the item with the given productId from the cart
      return state.filter((item) => item.product.id !== action.productId);

    case "UPDATE_QUANTITY":
      // Update the quantity of a specific item in the cart
      return state.map((item) =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity! }
          : item
      );
    case 'LOAD_CART':
      // Load the cart from a saved state 
      return action.cart!;

    default:
      return state;
  }
};

// Create a CartProvider component to manage the cart state
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize the cart state with the data from local storage or an empty array if not found
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save the cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Define functions to add, remove, and update items in the cart
  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  return (
    // Provide the cart state and functions to the components using the CartContext
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to easily access the cart context within components
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
