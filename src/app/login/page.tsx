"use client";

import React, { useState } from "react";
import { login } from "@/services/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await login(form);
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        router.push("/profile");
    };

    return (
        <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
            <h1 className="text-xl mb-4 font-bold">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    placeholder="Username"
                    className="w-full p-2 border rounded"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button className="bg-green-600 text-white w-full p-2 rounded">Login</button>
            </form>
        </div>
    );
}
