import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-5xl font-bold text-red-600">404</h1>
            <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
            <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md">Go Home</a>
        </div>
    );
};

export default NotFound;