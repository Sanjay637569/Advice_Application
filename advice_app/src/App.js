import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [advi, setAdvi] = useState([]);
  const [loading, setLoading] = useState(true);
  const AdviceFetch = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      console.log(data.slip.advice);
      const res = data.slip.advice;
      setAdvi(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      AdviceFetch();
    }, 1000);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h3>I'm Chat Bot</h3>
          {loading ? (
            <div>
              <h3>Loading...</h3>
            </div>
          ) : (
            <div className="advice">{advi} </div>
          )}
          <button onClick={AdviceFetch}>Give me advice</button>
        </div>
      </div>
    </div>
  );
}

export default App;
