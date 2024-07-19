import React, { useState } from 'react'
import './CircleDrawer.css'

function CircleDrawer() {

    const [circles, setCircles] = useState([])

    const handleClick = (e) => {
        const { clientX: x, clientY: y } = e
        setCircles([...circles, {x, y}])
    }

  return (
    <div className='drawer' onClick={handleClick}>
        {circles.map((circle, index) => 
            <div
            key={index}
            className="circle"
            style={{ left: circle.x, top: circle.y }}
          />
        )}
    </div>
  )
}

export default CircleDrawer