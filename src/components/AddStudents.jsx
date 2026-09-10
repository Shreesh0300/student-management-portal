import { useState } from 'react';

function AddStudent({ onAdd, editingStudent, onUpdate, onCancel }) {
  const [formData, setFormData] = useState(() => ({
    name: editingStudent?.name ?? '',
    email: editingStudent?.email ?? '',
    age: editingStudent?.age ?? '',
    course: editingStudent?.course ?? '',
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.age || !formData.course) {
      alert('Please fill all fields!');
      return;
    }

    const studentData = {
      id: editingStudent ? editingStudent.id : Date.now(),
      name: formData.name,
      email: formData.email,
      age: parseInt(formData.age),
      course: formData.course,
    };

    if (editingStudent) {
      onUpdate(studentData);
    } else {
      onAdd(studentData);
    }

    // Reset form
    setFormData({ name: '', email: '', age: '', course: '' });
  };

  return (
    <div className="add-student">
      <h2>{editingStudent ? 'Edit Student' : 'Add New Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {editingStudent ? 'Update Student' : 'Add Student'}
        </button>
        {editingStudent && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default AddStudent;