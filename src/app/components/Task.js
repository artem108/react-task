import React from 'react'

const Task = ({ text, id, deleteTask, imgPath, adminMode }) => {
  return (
    <section>
      <span>{id}.</span>
      <span>{text}</span>
      <img src={imgPath} />
      {
        adminMode && <button>Done</button>
      }
    </section>
  )
}
export default Task
