import './App.css';
import Star from './Star.js';
import {useState} from 'react';

function App() {
  const arr = [0, 1, 2, 3, 4];
  const [cur, setCurNum] = useState(-1);
  const handleMouseEnter = (num) => {
    setCurNum(num);
  }
  const handleMouseLeave = () => {
    setCurNum(-1);
  }

  return (
    <div className="App">
      {
        arr.map(item => {
          return <Star 
                  key={item} 
                  index = {item}
                  curNum={cur} 
                  handleMouseEnter={handleMouseEnter} 
                  handleMouseLeave={handleMouseLeave}/>
        })
      }
    </div>
  );
}

export default App;
