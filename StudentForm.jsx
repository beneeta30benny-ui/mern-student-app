import { useState } from "react";

const empty = { name: "", rollNo: "", email: "", department: "", year: 1 };

export default function StudentForm({ editing, onSave, onCancel }) {
  const [form, setForm] = useState(editing || empty);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await onSave({ ...form, year: Number(form.year) });
    if (ok && !editing) setForm(empty);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{editing ? "Edit Student" : "Add Student"}</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="rollNo" placeholder="Roll No" value={form.rollNo} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
      <select name="year" value={form.year} onChange={handleChange}>
        <option value={1}>1st Year</option>
        <option value={2}>2nd Year</option>
        <option value={3}>3rd Year</option>
        <option value={4}>4th Year</option>
      </select>
      <div className="actions">
        <button type="submit">{editing ? "Update" : "Add"}</button>
        {editing && (
          <button type="button" className="secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
