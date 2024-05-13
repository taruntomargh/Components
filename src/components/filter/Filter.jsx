import React, { useEffect, useState } from "react";

const Filter = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState();
  const [filteredItems, setFilteredItems] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log(result);

      if (result && result.products.length) {
        setLoading(false);
        setProducts(result);
        // console.log(products);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   // console.log(products);
  //   const cpy = [...products];
  //   console.log(cpy);
  //   setFilteredItems(
  //     currentSelectedCategory !== ""
  //       ? cpy.products.filter(
  //           (item) => item.products.category === currentSelectedCategory
  //         )
  //       : cpy
  //   );
  // }, [currentSelectedCategory]);

  function handleFilter(item) {
    const cpy = { ...products };
    console.log(cpy);

    setFilteredItems(
      cpy.products.map(prod=>prod.category===item ? prod : null)
    );
  }

  console.log(filteredItems);

  const uniqueCategories =
    products && products.products.length > 0
      ? [...new Set(products.products.map((item) => item.category))]
      : [];

  console.log(uniqueCategories);
  console.log(currentSelectedCategory);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center bg-green-200 w-full">Filter</h1>
      <div className="flex gap-2 mt-4">
        {uniqueCategories.map((item) => (
          <button
            onClick={() => handleFilter(item)}
            className="bg-red-300 rounded-md p-2"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center w-9/12 gap-2 mt-2">
        {filteredItems.products.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center bg-green-300 p-2 rounded-sm"
              >
                <li className="list-none text-xl font-semibold text-center">
                  {item.title}
                </li>
                <button className="bg-blue-300 rounded-md p-1">
                  {item.category}
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Filter;
