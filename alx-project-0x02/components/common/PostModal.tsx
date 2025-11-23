import { useState, CSSProperties } from "react";

interface PostModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (title: string, content: string) => void;
}

export default function PostModal({ open, onClose, onAdd }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    onAdd(title, content);
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Add Post</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={textareaStyle}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

const overlayStyle: CSSProperties = {
  position: "fixed",
  inset: "0",
  background: "rgba(0,0,0,0.4)",
};

const modalStyle: CSSProperties = {
  background: "#fff",
  padding: "20px",
  margin: "150px auto",
  width: "300px",
};

const inputStyle: CSSProperties = {
  width: "100%",
  marginBottom: "10px",
  padding: "8px",
};

const textareaStyle: CSSProperties = {
  width: "100%",
  height: "60px",
  marginBottom: "10px",
  padding: "8px",
};
