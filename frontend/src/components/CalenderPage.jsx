import { useState } from "react";
import CalenderComponent from "./Calender";

function CalenderPage(){
    const [view, setView] = useState("timeGridWeek");
    const [refresh, setRefresh] = useState(false);

  return (
    <>
      <div className="flex justify-center gap-4 my-4">
        <button onClick={() => setView("timeGridDay")} className="px-4 py-1 rounded bg-gray-200">Daily</button>
        <button onClick={() => setView("timeGridWeek")} className="px-4 py-1 rounded bg-gray-300 font-bold">Weekly</button>
        <button onClick={() => setView("dayGridMonth")} className="px-4 py-1 rounded bg-gray-200">Monthly</button>
      </div>
      <div className="px-4">
        <CalenderComponent view={view} refreshFlag={refresh} />
      </div>
    </>
  );
}

export default CalenderPage;