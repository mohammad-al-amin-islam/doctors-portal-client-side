import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth)
    const handleFrom = event => {
        event.preventDefault();
        const bookingDate = format(date, 'PP');
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: bookingDate,
            slot,
            patientEmail: user.email,
            patientName: user.displayName,
            number: event.target.number.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Appoinment is set, ${bookingDate} at ${slot}`);

                }
                else {
                    toast.error(`Already have an appoinment ,${data.booking?.date} At ${data.booking?.slot}`);
                }
                setTreatment(null);
            });


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleFrom} className='mt-5 grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full" />
                        <input name='number' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='email' type="email" disabled value={user?.email || ''} className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn btn-accent w-full " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;