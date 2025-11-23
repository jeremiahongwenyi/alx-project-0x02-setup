import React from 'react';
import { type PostProps } from '../../interfaces';

interface PostCardProps {
  post: PostProps;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border rounded-md p-4 mb-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-700">{post.body}</p>
      <small className="text-gray-400">User ID: {post.userId}</small>
    </div>
  );
};

export default PostCard;
