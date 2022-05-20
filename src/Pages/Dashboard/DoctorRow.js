import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeleteItem }) => {
    const { name, img, speciality } = doctor;

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
                <td>
                    <label onClick={() => setDeleteItem(doctor)} for="confirm-delete-modal" class="btn btn-xs">Delete</label>

                </td>
            </tr>
        </tbody>
    );
};

export default DoctorRow;