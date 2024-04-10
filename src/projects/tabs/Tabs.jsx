import React, { useState } from "react";

const Tab3 = () => {
  return <span className="text-red-800 text-2xl font-bold">Tab 3 content</span>;
};

const tabs = [
  {
    id:1,
    label: "Tab 1",
    content: <div className="text-2xl text-green-800 font-bold">This is tab 1</div>,
  },
  {
    id:2,
    label: "Tab 2",
    content: <div className="text-2xl text-blue-800 font-bold">This is tab 2</div>,
  },
  {
    id:3,
    label: "Tab 3",
    content: <Tab3 />,
  },
];

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  function handleClick(index) {
    setCurrentTab(index);
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl text-center bg-green-200">Tabs</h1>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => handleClick(1)}
          className="bg-violet-900 text-white rounded-md p-2"
        >
          Tab 1
        </button>
        <button
          onClick={() => handleClick(2)}
          className="bg-violet-900 text-white rounded-md p-2"
        >
          Tab 2
        </button>
        <button
          onClick={() => handleClick(3)}
          className="bg-violet-900 text-white rounded-md p-2"
        >
          Tab 3
        </button>
      </div>
      <div className="flex justify-center items-center gap-2">
        {tabs.map((tabItem) => {
          return <div key={tabItem.id}>{(currentTab === tabItem.id) ? tabItem.content : null}</div>;
        })}
      </div>
    </div>
  );
};

export default Tabs;
