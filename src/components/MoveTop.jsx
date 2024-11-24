import React from 'react'
import up from '../assets/up.svg'

const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
}

const MoveTop = () => {
  return (
    <div className='fixed right-5 bottom-5 p-3 border-gray-300 border rounded-md z-50 bg-white'>
        <button onClick={handleClick}>
            <img src={up} alt="move to top" style={{
                height : '30px',
                width : '30px',
                cursor : 'pointer'
            }}/>
      </button>
    </div>
  )
}

export default MoveTop
