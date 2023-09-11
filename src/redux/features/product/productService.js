import axios from "axios";
import { BACKEND_URL } from "../../../services/authService";
const API_URL = `${BACKEND_URL}/api/products/`;
// Create new Product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};
// Get all Product
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
// Delete a  Product
const deleteProducts = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
<<<<<<< HEAD
// Get Single Product
const getProduct = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Product
const updateProduct = async (id,formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData );
  return response.data;
}; 
=======
>>>>>>> 2cbd6d8a01c307383dd3d965eee33fb031a8a2ed

const productService = {
  createProduct,
  getProducts,
  deleteProducts,
<<<<<<< HEAD
  getProduct,
  updateProduct,
=======
>>>>>>> 2cbd6d8a01c307383dd3d965eee33fb031a8a2ed
};
export default productService;
