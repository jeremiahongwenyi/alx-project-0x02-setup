import React from 'react'
import  { type CardProps } from '@/interfaces'

function Card({title,content}:CardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "12px"
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card