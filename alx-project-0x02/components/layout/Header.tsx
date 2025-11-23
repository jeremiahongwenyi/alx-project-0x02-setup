import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
   <header style={{ display: "flex", gap: "16px", padding: "10px" }}>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
    </header>
  )
}

