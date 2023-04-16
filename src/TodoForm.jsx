import { useState } from "react";
import "./App.css";

export default function TodoForm ({ onSubmit }) {
    const [newItem, setNewItem] = useState("");
    function handleOnSubmit(e) {
        e.preventDefault();
        if (newItem === "") return
        onSubmit(newItem)
      }

      
    return (
        <form className="new-item-form" onSubmit={handleOnSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}