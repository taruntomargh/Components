import React, { useState } from "react";

function Pages({currentPage, totalPages=10, onPageChange}) {
  
  function generateNoOfPages(){
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  } 

  return (
    <div>
      <div className="flex flex-col gap-2">
      </div>
      <div className="flex gap-2">
        <button onClick={()=>onPageChange(currentPage - 1)} disabled={currentPage === 1} className={currentPage === 1 ? "disabled text-black bg-gray-200 text-md rounded-md p-2" : " text-white bg-green-500 text-md rounded-md p-2"}>
          Prev
        </button>
        {generateNoOfPages().map((pageNo) => (
          <button key={pageNo} onClick={()=>onPageChange(pageNo)} className={currentPage === pageNo ? "text-white bg-red-500 text-md rounded-md p-2" : " text-white bg-green-500 text-md rounded-md p-2"}>
            {pageNo}
          </button>
        ))}
        <button onClick={()=>onPageChange(currentPage + 1)}
        disabled={currentPage === 10} className={currentPage === 10 ? "disabled text-black bg-gray-200 text-md rounded-md p-2" : " text-white bg-green-500 text-md rounded-md p-2"}>
          Next
        </button>
      </div>
    </div>
  );
}

const Pagination = () => {
  
  const dummyData = Array.from({length: 100}, (_,index)=>({
    id: index + 1,
    name: `Product ${index + 1}`
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  function handlePageChange(currentPage){
    setCurrentPage(currentPage);
  }

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">Pagination</h1>
      <div className="flex flex-col gap-2 justify-center items-center mt-4">
        {currentListOfItems.map(item=><li key={item.id} className="list-none p-1 rounded-sm text-center text-white bg-blue-800">{item.name}</li>)}
        <Pages currentPage={currentPage} totalPages={Math.ceil(dummyData.length / itemsPerPage)} onPageChange={handlePageChange}/>
      </div>
    </div>
  );
};

export default Pagination;
