import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyAppoinment = () => {
    const [appoinments, setAppointments] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/boking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name:{appoinments.length}</th>
                        <th>Date</th>
                        <th>Slot</th>
                        <th>Treatment Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appoinments.map((appoinment, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{appoinment.patientName}</td>
                            <td>{appoinment.date}</td>
                            <td>{appoinment.slot}</td>
                            <td>{appoinment.treatmentName}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppoinment;