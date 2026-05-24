import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [records, setRecords] = useState([]);
  const [file, setFile] = useState(null);

  // Fetch records
  const fetchRecords = () => {

    axios
      .get("https://breathe-esg-dashboard.onrender.com/api/records/")
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Load records on page start
  useEffect(() => {
    fetchRecords();
  }, []);

  // Upload CSV
  const handleUpload = async () => {

    if (!file) {
      alert("Please select CSV file");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      await axios.post(
        "https://breathe-esg-dashboard.onrender.com/api/upload/",
        formData
      );

      alert("CSV Uploaded Successfully");

      fetchRecords();

    } catch (error) {
      console.log(error);
    }
  };

  // Update record status
  const updateStatus = async (id, status) => {

    try {

      await axios.patch(
        `https://breathe-esg-dashboard.onrender.com/api/records/${id}/status/`,
        {
          status: status
        }
      );

      fetchRecords();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      {/* Header */}
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "10px"
        }}
      >
        Breathe ESG Dashboard
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px"
        }}
      >
        ESG Emissions Review & Audit Platform
      </p>

      {/* Upload Section */}
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px"
        }}
      >

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={handleUpload}
          style={{
            marginLeft: "10px",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "#2563eb",
            color: "white"
          }}
        >
          Upload CSV
        </button>

      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "200px"
          }}
        >
          <h3>Total Records</h3>

          <p style={{ fontSize: "30px" }}>
            {records.length}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#14532d",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "200px"
          }}
        >
          <h3>Approved</h3>

          <p style={{ fontSize: "30px" }}>
            {
              records.filter(
                r => r.status === "APPROVED"
              ).length
            }
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#7f1d1d",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "200px"
          }}
        >
          <h3>Rejected</h3>

          <p style={{ fontSize: "30px" }}>
            {
              records.filter(
                r => r.status === "REJECTED"
              ).length
            }
          </p>
        </div>

      </div>

      {/* Records */}
      <h2>Emission Records</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >

        {records.map((record) => (

          <div
            key={record.id}
            style={{
              backgroundColor:
                record.suspicious
                  ? "#7f1d1d"
                  : "#14532d",

              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
            }}
          >

            <h3>{record.category}</h3>

            <p>
              <strong>Source:</strong>{" "}
              {record.source_type}
            </p>

            <p>
              <strong>Value:</strong>{" "}
              {record.value} {record.unit}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {record.status}
            </p>

            <p>
              <strong>Risk:</strong>{" "}
              {record.suspicious
                ? "Suspicious ⚠️"
                : "Normal ✅"}
            </p>

            <div style={{ marginTop: "15px" }}>

              <button
                onClick={() =>
                  updateStatus(record.id, "APPROVED")
                }
                style={{
                  padding: "8px 14px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  backgroundColor: "#22c55e",
                  color: "white"
                }}
              >
                Approve
              </button>

              <button
                onClick={() =>
                  updateStatus(record.id, "REJECTED")
                }
                style={{
                  marginLeft: "10px",
                  padding: "8px 14px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  backgroundColor: "#ef4444",
                  color: "white"
                }}
              >
                Reject
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;