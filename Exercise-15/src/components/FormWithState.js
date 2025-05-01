// FormWithState.js
import React, { useState } from 'react';

const FormWithState = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitted: ${formData.name}, ${formData.email}`);
  };

  return (
    <div>
      <h2>Form with useState</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p>Current name: {formData.name}</p>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>Current email: {formData.email}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormWithState;

