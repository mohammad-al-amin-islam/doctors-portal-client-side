import React from 'react';
import { toast } from 'react-toastify';


const User = ({ user, index, refetch }) => {
    const { email, role } = user;
    const handleAdminBtn = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `BEARER ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Only admin can make an admin')
                }

                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Made Admin Succesfully')

                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={handleAdminBtn} className="btn btn-xs">Make Admin</button>}</td>
            <td>
                <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>

        </tr>
    );
};

export default User;