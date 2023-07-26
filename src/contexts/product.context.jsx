import SHOP_DATA from "../shop-data.js";
import { createContext, useEffect, useState } from "react";
import { addCollectionsAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({ products: [] });

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
