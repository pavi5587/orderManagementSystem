import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toaster(status, message, closetime) {
    return (
        <div>
            {toast[status](message, { className: 'toastercss', autoClose: closetime, position: "top-center" })}
        </div>
    )
}
