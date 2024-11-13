import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const shopContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShopProvider = ({ children }) => {

  const [cardList,setCardList] = useState([]);
  const [wishList,setWishList] = useState([]);

  const value = {
    cardList,
    wishList,
    setCardList,
    setWishList
  }

  return(
     <shopContext.Provider value={value}  >
    {children}
  </shopContext.Provider>
  )
}

