export default function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) return <p className="empty">No students found.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Email</th>
          <th>Department</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s._id}>
            <td>{s.name}</td>
            <td>{s.rollNo}</td>
            <td>{s.email}</td>
            <td>{s.department}</td>
            <td>{s.year}</td>
            <td>
              <button onClick={() => onEdit(s)}>Edit</button>
              <button className="danger" onClick={() => onDelete(s._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
