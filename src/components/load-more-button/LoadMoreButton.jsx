import React, { useCallback, useEffect, useState } from "react";

const LoadMoreButton = () => {
  const [prod, setProd] = useState({});
  const [count, setCount] = useState(10);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${count}&skip=5`
        );
        // console.log(await res.json());
        setProd(await res.json());
        console.log(prod);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAllProducts();
  }, []);

    

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Load More Button</h1>
      <div className="flex flex-5 gap-2 flex-wrap">
        {prod.products &&
          prod.products.map((product) => {
            return (
              <div key={product.id} className="w-48 h-96 border-2 border-red-400 ">
                <img src={product.images[0]} alt="" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-gray-500 text-whtie p-2 rounded-md">Load more</button>
      </div>
    </div>
  );
};

export default LoadMoreButton;
