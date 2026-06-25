import { useState } from "react";

function Relieving() {
  const [message, setMessage] = useState("");

  const handleComplete = () => {
    setMessage("✓ Process Completed!!");
  };

  return (
    <div className="page-center">
      <div className="page-card">
        <h1>Employee Relieved</h1>

        <button onClick={handleComplete}>Complete Process</button>

        {message && (
          <div className="message completed">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Relieving;