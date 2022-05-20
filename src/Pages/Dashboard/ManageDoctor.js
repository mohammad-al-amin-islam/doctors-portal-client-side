import React from 'react';
import { useQuery } from 'react-query';
import Looading from '../Shared/Looading';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `BEARER ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));


    if (isLoading) {
        return <Looading></Looading>
    }
    return (
        <div>
            <h1 className="text-2xl">Manage Doctor:{doctors.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        doctors.map((doctor, index) => <DoctorRow
                            key={doctor._id}
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                        ></DoctorRow>)
                    }

                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;