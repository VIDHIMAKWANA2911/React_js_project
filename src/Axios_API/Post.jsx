import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Post() {
  const [TableData, setTabledata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setTabledata(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Posts Table</h2>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            TableData.map((ele, index) => (
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
