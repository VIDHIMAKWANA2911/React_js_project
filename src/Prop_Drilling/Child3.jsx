import React, { useContext } from "react";
import { data, data1 } from "./Prop";

export default function Child3() {
  let name = useContext(data);
  let arr = useContext(data1);

  return (
    <div>
      {/* <data.Consumer>
        //   function
        {(name) => {
          return (
            <>
              <h2>Name : {name}</h2>
            </>
          );
        }}
      </data.Consumer> */}

      {/* <data.Consumer>
        {(name) => {
          return (
            <>
              <data1.Consumer>
                {(arr) => {
                  return (
                    <>
                      <h2>Name : {name}</h2>

                      <ul>
                        {arr.map((ele, index) => (
                          <li key={index}>{ele}</li>
                        ))}
                      </ul>
                    </>
                  );
                }}
              </data1.Consumer>
            </>
          );
        }}
      </data.Consumer> */}

      <h2>Name : {name}</h2>

      <ul>
        {arr.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}