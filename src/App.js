import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
// import index from 'index.css'

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((i) => {
      return [...i, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id ) => {
    console.log("Delete");
    
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      } )
    })

  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <br />
          <h1>Todo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            <br />

            {items.map((itemsval, index) => {
              return <ToDoList 
              key = {index}
              id = {index}
              text={itemsval} 
              onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
