import React, { createContext } from "react";
// import "./App.css";
import Child1 from "./Child1";

const data = createContext();
const data1 = createContext();

function Prop() {
  let name = "Tony";

  let arr = [8, 6, 2, 1, 6, 7, 6, 2, 3, 8, 4, 5];

  return (
    <div>
      {/* Prop Drilling */}
      {/* props - properties */}
      {/* object */}

      {/* contextAPI */}
      {/* data, provider, consumer */}

      {/* useContext() */}

      <data.Provider value={name}>
        <data1.Provider value={arr}>
          <Child1 />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default Prop;
export { data, data1 };
