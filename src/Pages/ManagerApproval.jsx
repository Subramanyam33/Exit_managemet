import { useState } from "react";

function ManagerApproval() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleApprove = () => {
    setMessage("✓ Approved!");
    setMessageType("approved");
  };

  const handleReject = () => {
    setMessage("✗ Rejected !!");
    setMessageType("rejected");
  };

  return (
    <div className="page-center">
      <div className="page-card">
        <h1>Manager Approval</h1>

        <div className="button-row">
          <button className="approve-button" onClick={handleApprove}>
            Approve
          </button>
          <button className="reject-button" onClick={handleReject}>
            Reject
          </button>
        </div>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManagerApproval;