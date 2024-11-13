import { useContext } from "react"
import { shopContext } from "../Context/ShopContext"


function useShopContext() {
  return useContext(shopContext)
}

export default useShopContext
