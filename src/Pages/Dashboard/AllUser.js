import React from 'react';
import { useQuery } from 'react-query'
import Looading from '../Shared/Looading';
import User from './User';

const AllUser = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://nameless-scrubland-24240.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `BEARER ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Looading></Looading>
    }
    if (users.message) {
        return <h3>{users.message}</h3>
    }


    return (
        <div>
            <h1 className="text-2xl font-bold">
                All Users: {users?.length}
            </h1>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>User Email</th>
                        <th>Make User to Admin</th>
                        <th>Remove User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <User
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></User>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUser;