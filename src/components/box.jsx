import React, { useState } from 'react'

export default function box({ label }) {

  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <div className={`game__grid-box ${revealed && 'revealed'}`} 
        onClick={() => setRevealed(true)}
      > 
        {label}
      </div>

    </>

  )
}
