import { type ButtonProps } from "@/interfaces";
import { CSSProperties } from "react";

export default function Button({ label, size = "medium", shape = "rounded-md", onClick }: ButtonProps) {
  
  const sizeStyles: Record<string, CSSProperties> = {
    small: { padding: "6px 12px", fontSize: "12px" },
    medium: { padding: "8px 16px", fontSize: "14px" },
    large: { padding: "12px 24px", fontSize: "16px" },
  };

  const shapeStyles: Record<string, CSSProperties> = {
    "rounded-sm": { borderRadius: "4px" },
    "rounded-md": { borderRadius: "8px" },
    "rounded-full": { borderRadius: "999px" },
  };

  return (
    <button 
      onClick={onClick}
      style={{
        background: "#0070f3",
        color: "white",
        border: "none",
        cursor: "pointer",
        ...sizeStyles[size],
        ...shapeStyles[shape],
      }}
    >
      {label}
    </button>
  );
}
