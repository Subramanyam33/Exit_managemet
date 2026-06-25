function Dashboard() {
  return (
    <div className="page-center">
      <div className="page-card dashboard-card">
        <h1><b>DashBoard</b></h1>

        <div className="cards">
          <div className="card card1">
            <h3>Resignation Request</h3>
            <p>Submit employee resignation.</p>
          </div>

          <div className="card card2">
            <h3>Manager Approval</h3>
            <p>Approve or reject request.</p>
          </div>

          <div className="card card3">
            <h3>Exit Clearance</h3>
            <p>Department clearance process.</p>
          </div>

          <div className="card card4">
            <h3>Exit Interview</h3>
            <p>Employee feedback process.</p>
          </div>

          <div className="card card5">
            <h3>Settlement</h3>
            <p>Final settlement process.</p>
          </div>

          <div className="card card6">
            <h3>Employee Relieved</h3>
            <p>Exit process completed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;