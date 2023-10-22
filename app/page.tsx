import Product from "@/components/Product";
import { ProductType } from "../types/ProductType";

//https://fakestoreapi.com/products

// function to get data from endpoint
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  // if response is *not* okay throw an error
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  //if response is ok return the data in json format
  return res.json();
}

export default async function Home() {
  // use the above function to get all the products and sign them to a variable (products)
  const products = await getProducts();
  // log the data to console
  //console.log(products);
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 xl:gap-6">
      {/* Iterate all the products and extract parameters for each product */}
        {products.map((product: ProductType) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
