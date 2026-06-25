import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResignationForm() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Employee Name is Required");
    } else if (reason.trim() === "") {
      alert("Reason for Resignation is Required");
    } else {
      alert("Resignation Request Submitted Successfully");
      setName("");
      setReason("");
      navigate("/manager");
    }
  };

  return (
    <div className="resignation-page">
      <div className="resignation-card">
        <h1>Resignation Form</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Employee Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="reason">Reason for Resignation</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ResignationForm;