import React, { useState } from "react";
import Input from "./input";
import List from "./list";
import Title from "./title";
function App() {

  const [inputText, setinputText] = useState("")
  const [listItem, setListItem] = useState([])
  function handleChange(e){
    const newValue = e.target.value;
    setinputText(newValue);
  }
  function handleClick(){
    setListItem((prevItems) => {
      return [...prevItems,inputText]
    });
    setinputText("");
  }
  function deleteItem(id){
    setListItem((prevItems) => {
      return prevItems.filter((listItem,index) => { return index !== id})
  })}
  return (
    <div className="container">
      <Title />
      <Input handleChange={handleChange} inputText={inputText} handleClick={handleClick}/>
      <div>
        <ul>
          {listItem.map((item,index) => {
            return <List key={index} id={index} items={item} onCheck={deleteItem}/>
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
