"use client";

import React, { useState } from "react";
import { register } from "@/services/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const router = useRouter();

  /*  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await register(form);
        router.push("/login");
    };*/

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(form);
            router.push("/login");
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed. See console for details.");
        }
    };



    return (
        <div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
            <h1 className="text-xl mb-4 font-bold">Register</h1>
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
                <button className="bg-blue-600 text-white w-full p-2 rounded">Register</button>
            </form>
        </div>
    );
}
