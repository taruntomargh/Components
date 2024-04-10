import React, { useEffect, useState } from "react";

const DragAndDrop = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  async function fetchTodosList() {
    try {
      const response = await fetch(
        "https://dummyjson.com/todos?limit=5&skip=0"
      );
      const result = await response.json();

      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        setTodos(result.todos);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodosList();
  }, []);

  console.log(todos);

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200 w-full">
        Drag and Drop
      </h1>
      <div>{loading ? <p>Loading... Please Wait</p> : <div>{todos.map(item=><p key={item.id}>{item.todo}</p>)}</div>}</div>
    </div>
  );
};

export default DragAndDrop;
