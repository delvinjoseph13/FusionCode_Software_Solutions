import AddEventPage from "./components/AddEventPage";
import CalenderPage from "./components/CalenderPage";
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <button onClick={() => navigate("/add")} className="text-pink-600 font-semibold">+ New Event</button>
      </div>

      <Routes>
        <Route path="/" element={<CalenderPage />} />
        <Route path="/add" element={<AddEventPage/>} />
      </Routes>
    </>
  );
}

export default App;
