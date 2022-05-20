import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, speciality, email } = doctor;
    const handleDeleteBtn = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `BEARER ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted`)
                    refetch()
                }
            });

    }
    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>
                    <div class="avatar">
                        <div class="w-16 rounded">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                </td>
                <td>{name}</td>
                <td>{speciality}</td>
                <td><button onClick={() => handleDeleteBtn(email)} class="btn btn-xs">Delete</button></td>
            </tr>
        </tbody>
    );
};

export default DoctorRow;