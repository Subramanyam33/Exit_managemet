import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>H R M S </h3>

      <Link to="/">Dashboard</Link>
      <Link to="/resignation">Resignation</Link>
      <Link to="/manager">Manager Approval</Link>
      <Link to="/clearance">Exit Clearance</Link>
      <Link to="/interview">Exit Interview</Link>
      <Link to="/settlement">Settlement</Link>
      <Link to="/relieving">Relieving</Link>
    </div>
  );
}

export default Sidebar;