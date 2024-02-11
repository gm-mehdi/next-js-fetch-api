import React from 'react';
import { UnsplashImage } from "@/models/unsplash-image";

export const SSrname = async (username: any) => {
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const user: UnsplashImage = await response.json();

    if (!user) {
        console.error("Invalid image format:", username);
        return null;
    }

    return (
        <div>
            {user.user.username}
        </div>
    );
};
