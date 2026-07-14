// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useEffect } from "react";

// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useState, useEffect } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// function ExitClearance() {
//   const [itClearance, setItClearance] = useState(false);
//   const [financeClearance, setFinanceClearance] = useState(false);
//   const [hrClearance, setHrClearance] = useState(false);

//   // useEffect(() => {
//   //   const percentage =
//   //     (itClearance ? 30 : 0) +
//   //     (financeClearance ? 30 : 0) +
//   //     (hrClearance ? 40 : 0);

//   //   localStorage.setItem(
//   //     "clearancePercentage",
//   //     percentage.toString()
//   //   );
//   // }, [itClearance, financeClearance, hrClearance]);

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//   event.preventDefault();

//   const handleSubmit = (event) => {
//   event.preventDefault();

//   if (!itClearance || !financeClearance || !hrClearance) {
//     alert("All clearances must be checked");
//   } else {
//     alert("Exit Clearance Completed Successfully");
//     navigate("/interview");
//   }
// };

//   if (!itClearance || !financeClearance || !hrClearance) {
//     alert("All clearances must be checked");
//   } else {
//     alert("Exit Clearance Completed Successfully");
//     navigate("/interview");
//   }
// };
//   return (
//     <div className="resignation-page">
//       <div className="resignation-card">
//         <h1>Exit Clearance</h1>

//         <form onSubmit={handleSubmit}>
//           <div className="form-row">
//   <label className="checkbox-row">
//     <input
//       type="checkbox"
//       checked={itClearance}
//       onChange={(e) => setItClearance(e.target.checked)}
//     />
//     IT Clearance
//   </label>

//   <label className="checkbox-row">
//     <input
//       type="checkbox"
//       checked={financeClearance}
//       onChange={(e) => setFinanceClearance(e.target.checked)}
//     />
//     Finance Clearance
//   </label>

//   <label className="checkbox-row">
//     <input
//       type="checkbox"
//       checked={hrClearance}
//       onChange={(e) => setHrClearance(e.target.checked)}
//     />
//     HR Clearance
//   </label>
// </div>

//           <div className="form-actions">
//             <button type="submit">Submit Clearance</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ExitClearance;



// import { useNavigate } from "react-router-dom";

// function ExitClearance() {
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("Exit Clearance Completed Successfully");
//     navigate("/interview");
//   };

//   return (
//     <div className="resignation-page">
//       <div className="resignation-card">
//         <h1>Exit Clearance</h1>

//         <form onSubmit={handleSubmit}>
//           <div className="form-actions">
//             <button type="submit">
//               Submit Clearance
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ExitClearance;


import { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function ExitClearance() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if Resignation (Step 1) is completed
    const resignationCompleted =
      localStorage.getItem("resignationCompleted") === "true";

    if (!resignationCompleted) {
      alert("Please complete and submit Step 1 before proceeding to Step 2.");
      return;
    }

    // Mark Clearance (Step 2) as completed
    localStorage.setItem("clearanceCompleted", "true");

    alert("Exit Clearance Completed Successfully");
    navigate("/interview");
  };

  return (
    <>
      {/*
        <div className="resignation-page">
          <div className="resignation-card">
            <h1>Exit Clearance</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-actions">
                <button type="submit">Submit Clearance</button>
              </div>
            </form>
          </div>
        </div>
      */}
    </>
  );
}

export default ExitClearance;
