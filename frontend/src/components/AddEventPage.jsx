import { useNavigate } from "react-router-dom";
import AddEvent from "./AddEvent";
function AddEventPage(){
    const navigate=useNavigate()
    return (
        <AddEvent
         isOpen={true}
        onClose={() => navigate("/")}
        onEventAdded={() => navigate("/")}
        />
    )
}

export default AddEventPage;