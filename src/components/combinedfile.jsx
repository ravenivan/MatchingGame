import React, { useState } from 'react'
import Box from '../components/box'



export default function grid() {

  // const boxArray = [
  //   'box1', 'box2', 'box3', 'box4',
  //   'box5', 'box6', 'box7', 'box8',
  //   'box9', 'box10', 'box11', 'box12',
  //   'box13', 'box14', 'box15', 'box16',
  // ]

  const boxArray = [1,2,3]

  const [twoSelected, setTwoSelected] = useState(false)

  console.log(boxArray);
  return (
    <div id="game__grid">
      {/* {
        boxArray.map((item, index) => {
          <Box label={item} key={index} />
        })
      } */}
      <Box label={1} />
      <Box label={2}  />
      <Box label={3} />
      <Box label={4} />

      <Box label={5}/>
      <Box label={6}  />
      <Box label={7}  />
      <Box label={8}/>

      <Box label={9} />
      <Box label={10} />
      <Box label={11}  />
      <Box label={12} />

      <Box label={13} />
      <Box label={14}/>
      <Box label={15} />
      <Box label={16} />

      
      
    
    </div>
  )
}


import React from 'react'
import Grid from '../components/grid'

export default function game() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="game__title">
          The Match Game
        </h1>

        <Grid />

        <div className="game__stats">
          <div className="game__stat">
            <h4 className="game__stat-num">0</h4>
            <p className="game__stat-name">Score</p>
          </div>
          <div className="game__stat">
            <h4 className="game__stat-num">0</h4>
            <p className="game__stat-name">Moves</p>
          </div>
          <div className="game__stat">
            <h4 className="game__stat-num">0</h4>
            <p className="game__stat-name">Misses</p>
          </div>
          <div className="game__stat">
            <h4 className="game__stat-num">0%</h4>
            <p className="game__stat-name">Accuracy</p>
          </div>
          <div className="game__stat">
            <h4 className="game__stat-num">0</h4>
            <p className="game__stat-name">Games Played</p>
          </div>
          <button >random</button>


        </div>
      </div>
    </div>

  )
}


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
