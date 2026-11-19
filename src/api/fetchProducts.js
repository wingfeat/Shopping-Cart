export async function fetchProducts() {
  const response = await fetch(`https://fakestoreapi.com/products`);

  if (!response.ok) {
    throw new Error("Unable to display products");
  }
  const data = await response.json();

  return data;
}
