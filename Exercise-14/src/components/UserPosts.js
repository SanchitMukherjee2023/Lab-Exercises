import React from 'react';

const posts = [
  "Learning React :D",
  "Hello World!",
  "Bye World!"
];

const UserPosts = () => {
  return (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map((post, i) => <li key={i}>{post}</li>)}
      </ul>
    </div>
  );
};

export default UserPosts;
