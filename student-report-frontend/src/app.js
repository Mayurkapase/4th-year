import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Binary Search"; // ✅ Set tab title
    fetch("http://localhost:5000/api/student-report")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* KKW Header */}
      <div style={{ textAlign: "center", marginBottom: "30px", fontFamily: "Georgia, serif" }}>
        <h3 style={{ margin: "5px", fontSize: "18px" }}>Karmaveer Kakasaheb Wagh Education Society's</h3>
        <h2 style={{ margin: "5px", fontWeight: "bold", fontSize: "20px" }}>
          KARMAVEER KAKASAHEB WAGH INSTITUTE OF ENGINEERING EDUCATION & RESEARCH
        </h2>
        <h3 style={{ margin: "5px", fontSize: "18px", fontWeight: "bold", color: "#6d1b7b" }}>
          Department of Physical Education & Sports
        </h3>
        <p style={{ margin: "5px", fontSize: "14px" }}>
          Hirabai Haridas Vidyanagari, AmrutDham, Panchavati, NASHIK – 422003, Maharashtra<br />
          Ph.No. (0253) 2516671, 2512876, 2512867  Fax: (0253) 2511962<br />
          Email: kkwieer@gmail.com / kkwe_office@dataone.in  Website:{" "}
          <a href="http://www.kkwagh.org" target="_blank" rel="noreferrer">www.kkwagh.org</a>
        </p>
      </div>

      {/* Assignment Title */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📄 Binary Search</h2>

      {/* Report Table */}
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
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
