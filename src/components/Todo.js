import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, deleteToDo, deleteAllToDo } from '../actions/index';
import './todo.css';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption> Add Your List Here !!</figcaption>
        </figure>
        <div className="addItems">
          <span class="input-element">
            <span
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={() => dispatch(addToDo(inputValue), setInputValue(''))}
            ></span>
            <input
              type="text"
              placeholder="Add Items.."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </span>
        </div>
        <div className="showItems">
          {list.map((elem) => {
            return (
              <div className="eachItems" key={elem.id}>
                {/* <h3>{elem.data}</h3>
                <div className="todo-btn">
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => dispatch(deleteToDo(elem.id))}
                  ></i>
                </div> */}
                <span
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() => dispatch(deleteToDo(elem.id))}
                ></span>
                <h3>{elem.data}</h3>
              </div>
            );
          })}
        </div>
        <div className="remove-button">
          <button
            className="w3-btn w3-white w3-border w3-border-red w3-round-large"
            onClick={() => dispatch(deleteAllToDo())}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
