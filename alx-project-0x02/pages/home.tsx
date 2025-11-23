import React from 'react'
import Card from '@/components/common/Card'

function home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Card 
        title="Card One" 
        content="This is the first card content." 
      />

      <Card 
        title="Card Two" 
        content="This is another card with different content." 
      />

      <Card 
        title="Welcome Message" 
        content="Reusable components help keep code clean and consistent." 
      />
    </div>
  )
}

export default home