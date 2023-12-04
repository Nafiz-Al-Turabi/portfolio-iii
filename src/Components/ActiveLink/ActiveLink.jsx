import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({title,to,children}) => {
    return (
        <NavLink
            to={to}
            title={title}
            className={({ isActive }) =>
                isActive ? "text-[#f9fc2f] text-3xl"  : "text-3xl hover:text-[#f9fc2f] duration-500"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;