import React from 'react';

const SignUp = () => {
    return (
        <div className="max-w-md mx-auto mb-48 p-6 bg-white rounded-lg shadow-md mt-40">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                    <input id="name" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">Email Address</label>
                    <input id="email" type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium mb-2">Password</label>
                    <input id="password" type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block font-medium mb-2">Confirm Password</label>
                    <input id="confirmPassword" type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-700">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>

    );
};

export default SignUp;