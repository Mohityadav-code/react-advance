import './App.css';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const handleSearchChange = (value) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      console.log("Search:", value);
          // here we can call submitHandler Function which i want to call after three seconds 
    }, 3000);
      setSearch(value);
   
    setTimeoutId(newTimeoutId);
  };

  return (
    <div className="App">
      <input
        className='w-96 h-10 bg-gray-100 mt-40 outline-none border border-red-300'
        type="text"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
}

export default App;
