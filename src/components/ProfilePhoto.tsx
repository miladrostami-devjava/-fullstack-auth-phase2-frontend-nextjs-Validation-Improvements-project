import React, { useEffect, useState } from "react";

type Props = {
    filename: string;
    token: string | null;
};

export default function ProfilePhoto({ filename, token }: Props) {
    const [photoSrc, setPhotoSrc] = useState<string>("");

    useEffect(() => {
        if (!filename || !token) return;

        let objectUrl: string;

      /*  fetch(`http://localhost:9090/api/profile/photo/${filename}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch image");
                return res.blob();
            })
            .then((blob) => {
                objectUrl = URL.createObjectURL(blob);
                setPhotoSrc(objectUrl);
            })
            .catch((err) => {
                console.error("Error loading image:", err);
                setPhotoSrc("");
            });*/


        fetch(`http://localhost:9090/api/profile/photo/${filename}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch image");
                return res.blob();
            })
            .then((blob) => {
                const objectUrl = URL.createObjectURL(blob);
                setPhotoSrc(objectUrl);
            })
            .catch((err) => {
                console.error("Error loading image:", err);
                setPhotoSrc("");
            });



        return () => {
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl); // پاک‌سازی URL ایجاد شده
            }
        };
    }, [filename, token]);

    if (!photoSrc) return <div className="text-gray-500">Loading photo...</div>;

    return (
        <img
            src={photoSrc}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border mt-2"
        />
    );
}
