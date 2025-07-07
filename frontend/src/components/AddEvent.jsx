import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEvent({ isOpen, onClose, onEventAdded }){
    const [formData,setFormData]=useState({
        title:"",
        start:"",
        end:"",
        user:"Delvin"
    })
    

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/api/event`,formData)
            onEventAdded();
            onClose()
        } catch (error) {
            alert("Error")
            console.log(error)
        }

    }

    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            className="border p-2 rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="start"
            className="border p-2 rounded"
            value={formData.start}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="end"
            className="border p-2 rounded"
            value={formData.end}
            onChange={handleChange}
            required
          />
        
          <input
            type="text"
            name="user"
            placeholder="User (e.g., Brine)"
            className="border p-2 rounded"
            value={formData.user}
            onChange={handleChange}
          />
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-600 text-white rounded"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default AddEvent;