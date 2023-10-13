'use client'

import EmptyState from "../components/EmpyState";

const   Users = () => {
    return (
        <div className="hidden lg:block lg:pl-80 h-full">
            <EmptyState/>
        </div>
    );
}

export default Users;