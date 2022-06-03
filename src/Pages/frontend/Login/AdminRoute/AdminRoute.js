import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import ReactLoading from 'react-loading';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
               {isLoading && <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>}
            </div>
        )
    }
    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                {isLoading && <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>}
            </div>
        )
    }
    if (user.email && admin) {
        return children;
    }
    // return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;