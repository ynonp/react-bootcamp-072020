import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import _ from 'lodash'

function CheckableList(props) {
  const { items } = props;
  const [count, setCount] = useState(0)

  function reset()
  {
      setCount(x => x+1)
  }

  return (
      <>
          <button onClick={reset}>Unselect All</button>
    <ul key={count}>
      {items.map(item => (
        <li key={item}>
          <label>
            <input type="checkbox" />
            {item}
          </label>
        </li>
      ))}
    </ul>
          </>
  );
}


const App = () => {
  const [items, setItems] = useState(['one', 'two', 'three', 'four', 'five']);

  function shuffle()
  {
     setItems(_.shuffle(items))
  }

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <CheckableList items={items} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
