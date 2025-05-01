import React, { useRef, useState } from 'react';

const FormWithRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value
    };
    setSubmittedData(data);
    alert(`Submitted: ${data.name}, ${data.email}`);
  };

  return (
    <div>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default FormWithRef;