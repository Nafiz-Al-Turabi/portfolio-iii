import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "text-[#f9fc2f] text-3xl"  : "text-3xl"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;