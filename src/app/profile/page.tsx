"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/services/api";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const [message, setMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            router.push("/login");
            return;
        }

        getProfile(token)
            .then((res) => setMessage(res.data))
            .catch(() => {
                localStorage.removeItem("jwt");
                router.push("/login");
            });
    }, []);

    return (
        <div className="max-w-lg mx-auto mt-20 bg-white p-6 rounded shadow">
            <h1 className="text-xl font-bold mb-4">Profile Page</h1>
            <p>{message}</p>
        </div>
    );
}
