import axios from "axios";
export  async function getProducts ({commit}) {
  const products=await axios ('https://back-4-back.herokuapp.com/product')
  commit('productsMutation',products.result)
}
