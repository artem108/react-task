import React from 'react'

const Task = ({ text, id, imgPath, adminMode, done }) => {
  return (
    <section>
      <span>{id}.</span>
      <span>{text}</span>
      <img src={imgPath} />
      {
        adminMode && <button id={id} onClick={done}>Done</button>
      }
    </section>
  )
}
export default Task
