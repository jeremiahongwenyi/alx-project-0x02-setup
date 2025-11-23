import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [posts, setPosts] = useState<Post[]>([
    { title: "Card One", content: "This is the first card content." },
    { title: "Card Two", content: "This is another card with different content." },
    { title: "Welcome Message", content: "Reusable components help keep code clean and consistent." }
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      <button 
        onClick={() => setIsModalOpen(true)} 
        style={{ marginBottom: "20px" }}
      >
        Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={handleAddPost} 
      />
    </div>
  );
}
