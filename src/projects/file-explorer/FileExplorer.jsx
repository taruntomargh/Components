import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "public",
    isFolder: true,
    items: [
      {
        id: 2,
        title: "vite.svg",
        isFolder: false,
      },
    ],
  },
  {
    id: 3,
    title: "src",
    isFolder: true,
    items: [
      {
        id: 4,
        title: "assets",
        isFolder: true,
        items: [
          {
            id: 5,
            title: "react.svg",
            isFolder: false,
          },
        ],
      },
      {
        id: 6,
        title: "components",
        isFolder: true,
        items: [
          {
            id: 7,
            title: "Button.jsx",
            isFolder: false,
          },
          {
            id: 8,
            title: "Navbar.jsx",
            isFolder: false,
          },
        ],
      },
      {
        id: 9,
        title: "pages",
        isFolder: true,
        items: [
          {
            id: 10,
            title: "ErrorPage.jsx",
            isFolder: false,
          },
          {
            id: 11,
            title: "Home.jsx",
            isFolder: false,
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "index.html",
    isFolder: false,
  },
  {
    id: 13,
    title: "package.json",
    isFolder: false,
  },
];

// const explorer = {
//   id:"1",
//   name: "root",
//   isFolder: true,
//   items: [
//     {
//       id:"2",
//       name: "public",
//       isFolder: true,
//       items: [
//         {
//           id:"3",
//           name: "public nested 1",
//           isFolder: true,
//           items: [
//             {
//               id:"4",
//               name: "index.html",
//               isFolder: false,
//               items: []
//             },
//             {
//               id:"5",
//               name: "hello.html",
//               isFolder: false,
//               items: []
//             }
//           ]
//         },
//         {
//           id:"6",
//           name: "public_nested_file",
//           isFolder: false,
//           items: []
//         }
//       ]
//     },
//     {
//       id:"7",
//       name: "src",
//       isFolder: true,
//       items: [
//         {
//           id:"8",
//           name: "App.js",
//           isFolder: false,
//           items: []
//         },
//         {
//           id:"9",
//           name: "Index.js",
//           isFolder: false,
//           items: []
//         },
//         {
//           id:"10",
//           name: "styles.css",
//           isFolder: false,
//           items: []
//         }
//       ]
//     },
//     {
//       id:"11",
//       name: "package.json",
//       isFolder: false,
//       items: []
//     }
//   ]
// };

function FilesAndFolder() {
  const [showFolder, setShowFolder] = useState(false);

  function handleShowFolder() {
    setShowFolder(!showFolder);
  }

  return (
    <>
      {data.map((item) => (
        <ul key={item.id}>
          <li
            className="bg-blue-200 w-40 text-xl cursor-pointer rounded-sm"
            onClick={handleShowFolder}
          >
            {item.isFolder ? "📁" : "📄"}
            {item.title}
            {showFolder
              ? item.items && item.items.length > 0
                ? <FilesAndFolder /> : null
              : null}
          </li>
        </ul>
      ))}
    </>
  );
}

const FileExplorer = () => {
  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">File Explorer</h1>
      <div className="flex flex-col items-center gap-1 mt-4">
        <FilesAndFolder />
      </div>
    </div>
  );
};

export default FileExplorer;