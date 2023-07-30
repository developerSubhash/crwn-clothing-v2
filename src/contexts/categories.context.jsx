import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

//* FETCHING ALL ASYSNC PRODUCTS FROM FIRESTORE DATABASE.

export const CategoriesContext = createContext({ categoriesMap: {} });

export function CategoriesProvider({ children }) {
  const [categoriesMap, setcategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(function () {
    async function getCategoriesMap() {
      const categoryMap = await getCategoriesAndDocuments();
      setcategoriesMap(categoryMap);
    }

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
