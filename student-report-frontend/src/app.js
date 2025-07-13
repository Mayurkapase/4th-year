import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/student-report")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📄 Student Report</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Test Cases Passed</th>
            <th>Marks</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, idx) => (
            <tr key={idx}>
              <td>{student["Serial No"]}</td>
              <td>{student["Student ID"]}</td>
              <td>{student["Student Name"]}</td>
              <td>{student["Test Cases Passed Out Of"]}</td>
              <td>{student["Marks"]}</td>
              <td>{student["Attendance"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
