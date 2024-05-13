import React, { useState } from "react";
import explorer from "./data";

function FilesAndFolder({explorer}){

  const [expand, setExpand] = useState(false);

  if(explorer.isFolder){
    return (
      <div className="flex flex-col w-96 ml-2  cursor-pointer ">
        <span onClick={()=>setExpand(!expand)}>📁{explorer.name}</span>
        <div className={expand ? "block" : "hidden"}>
        {explorer.items.map((expItem)=><FilesAndFolder explorer={expItem} key={expItem.id}/>)}
        </div>
      </div>
    )
  } else {
    return <span className="ml-2 flex flex-col">📄{explorer.name}</span>
  }
}


const FileExplorer = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-center bg-green-200 w-full">File Explorer</h1>
      <div className="flex flex-col items-center gap-1 mt-4 bg-slate-200 w-96">
        <FilesAndFolder explorer={explorer} />
      </div>
    </div>
  );
};

export default FileExplorer;