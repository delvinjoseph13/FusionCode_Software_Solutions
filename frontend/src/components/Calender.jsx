import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function CalenderComponent({view}){
    const [events,setEvents]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/events`).then(res=>{
            setEvents(res.data)
        })
    },[])
    return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={view}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      events={events}
      height="auto"
    />
    )
}

export default CalenderComponent