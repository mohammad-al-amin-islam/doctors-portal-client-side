import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteItem, refetch, setDeleteItem }) => {
    const { name, email } = deleteItem;
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
                    toast.success(`Doctor ${name} is deleted`);
                    setDeleteItem(null)
                    refetch()
                }
            });

    }
    return (
        <div>

            <input type="checkbox" id="confirm-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to delete doctor {name}?</h3>
                    <p class="py-4">If you delete it the information will delete permanently</p>
                    <div class="modal-action">
                        <button onClick={() => handleDeleteBtn(email)} class="btn btn-xs">Delete</button>
                        <label for="confirm-delete-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;