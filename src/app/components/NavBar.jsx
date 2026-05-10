import React from 'react';

const NavBar = () => {
    return (
        <nav className='bg-blue-950 text-white flex justify-between items-center h-12 px-4'>
            <div className='logo'>Get me a Tea</div>
            <ul className='flex justify-between gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>SignUP</li>
                <li>Login</li>
            </ul>

        </nav>
    );
};

export default NavBar;