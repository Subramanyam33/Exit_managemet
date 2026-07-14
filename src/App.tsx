import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./Pages/Dashboard";
import ResignationForm from "./Pages/ResignationForm";
import ExitClearance from "./Pages/ExitClearance";
import ExitInterview from "./Pages/ExitInterview";
import Settlement from "./Pages/Settlement";
import Relieving from "./Pages/Relieving";
 
function App() {
  return (
<Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<Dashboard />} />
  <Route path="resignation" element={<ResignationForm />} />
  <Route path="clearance" element={<ExitClearance />} />
  <Route path="interview" element={<ExitInterview />} />
  <Route path="settlement" element={<Settlement />} />
  <Route path="relieving" element={<Relieving />} />
</Route>
</Routes>
  );
}

export default App;
