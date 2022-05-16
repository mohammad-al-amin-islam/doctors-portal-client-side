import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppoinment = () => {
    const [appoinments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/boking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `BEARER ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login');
                    }
                    return res.json()
                })
                .then(data => setAppointments(data));
        }
    }, [user, navigate])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

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