import {apiConnection} from "./apiConnection";
const allProducts = async () => {
    try {
    const result = await apiConnection('GET', null,null, 'products/');
    console.log("Trajo todos los productos")
    console.log(result);
    return result;
    } catch (error) {
    console.error('Error en la solicitud:', error);
    return { error: error.message };
  }
};
const detailProduct = async (id) => {
    try {
    const result = await apiConnection('GET', null, null, `products/${id}`);
    console.log("Trajo el producto")
    console.log(result);
    return result;
    } catch (error) {
    console.error('Error en la solicitud:', error);
    return { error: error.message };
  }
};

export {allProducts, detailProduct};