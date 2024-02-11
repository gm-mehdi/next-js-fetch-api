import { UnsplashUser } from '@/models/unsplash-user';
import React from 'react';

const page = async ({ params }: { params: { username: string } }) => {
  const username = params.username;
  const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const user: UnsplashUser = await response.json();

  if (!user) {
    console.error("Invalid username :", username);
    return null;
  }

  return (
    <div>
      <p>Username: {user.username}</p>
      <p>name: {user.name}</p>
      <p>first name: {user.first_name}</p>
      <p>last name: {user.last_name}</p>
      <p>location: {user.location}</p>
    </div>
  );
};

export default page;
