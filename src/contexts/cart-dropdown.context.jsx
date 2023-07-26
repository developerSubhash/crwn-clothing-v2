import { createContext, useEffect, useState } from "react";

const matchCartItem = function (cartItems, itemId) {
  return cartItems.find((cartItem) => cartItem.id === itemId);
};

const addCartItem = function (cartItems, productToAdd) {
  const { id } = productToAdd;

  const existingCartItem = matchCartItem(cartItems, id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = function (cartItems, cartItemToRemove) {
  const existingCartItem = matchCartItem(cartItems, cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = function (cartItems, cartItemToClear) {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  subtractCartItem: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(
    function () {
      const totalCartItems = cartItems.reduce(
        (total, currentItem) => total + currentItem.quantity,
        0
      );
      setCartCount(totalCartItems);
    },
    [cartItems]
  );

  const addItemToCart = function (productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = function (cartItemToRemove) {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = function (cartItemToClear) {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const cartTotal = cartItems.reduce(
    (totalCartItemsPrice, cartItem) =>
      totalCartItemsPrice + cartItem.price * cartItem.quantity,
    0
  );

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
}
