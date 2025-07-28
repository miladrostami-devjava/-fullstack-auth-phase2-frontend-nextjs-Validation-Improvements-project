'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import Container from "@/components/Container";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        router.push('/login');
    };

    return (
        <>
            <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
                <Container>
                    <div className="text-xl font-bold">
                        <Link href="/">JWT Auth App</Link>
                    </div>
                    <div className="space-x-4">
                        <Link href="/" className="hover:text-yellow-400">Home</Link>
                        {isLoggedIn ? (
                            <>
                                <Link href="/profile" className="hover:text-yellow-400">Profile</Link>
                                <Link href="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
                                <button onClick={handleLogout}
                                        className="ml-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="hover:text-yellow-400">Login</Link>
                                <Link href="/register" className="hover:text-yellow-400">Register</Link>
                            </>
                        )}
                    </div>
                </Container>

            </nav>
        </>
    );
}
