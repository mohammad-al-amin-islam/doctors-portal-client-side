import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Looading from '../Shared/Looading';
import useAdmin from '../../hooks/useAdmin'
import { signOut } from 'firebase/auth';

const ReqireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();

    if (loading || adminLoading) {
        return <Looading></Looading>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default ReqireAdmin;