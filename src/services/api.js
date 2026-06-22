const BASE_URL = "http://localhost:8080/api";

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok while fetching products");
  }
  return response.json();
}

export async function fetchProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok while fetching product ${id}`);
  }
  return response.json();
}