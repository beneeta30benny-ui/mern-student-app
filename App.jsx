import { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm.jsx";
import StudentList from "./components/StudentList.jsx";

const API = "/api/students";

export default function App() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(API, { params: { search } });
      setStudents(data);
    } catch (err) {
      setError("Could not load students. Is the server running?");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [search]);

  const handleSave = async (form) => {
    setError("");
    try {
      if (editing) {
        await axios.put(`${API}/${editing._id}`, form);
        setEditing(null);
      } else {
        await axios.post(API, form);
      }
      fetchStudents();
      return true;
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      return false;
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    try {
      await axios.delete(`${API}/${id}`);
      fetchStudents();
    } catch (err) {
      setError("Delete failed");
    }
  };

  return (
    <div className="container">
      <h1>Student Management</h1>
      {error && <p className="error">{error}</p>}

      <StudentForm
        key={editing ? editing._id : "new"}
        editing={editing}
        onSave={handleSave}
        onCancel={() => setEditing(null)}
      />

      <input
        className="search"
        placeholder="Search by name, roll no or department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StudentList
        students={students}
        onEdit={setEditing}
        onDelete={handleDelete}
      />
    </div>
  );
}
