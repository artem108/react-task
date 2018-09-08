import React from 'react'

const Task = ({ text, id, imgPath, adminMode, done, edit, editing }) => {
  return (
    <section>
      <span>{id}.</span>
      {
        adminMode && editing
        ? <input type="text" defaultValue={text} />
        : <span>{text}</span>
      }
      <img src={imgPath} />
      {
        adminMode && <button id={id} onClick={done}>Complete</button>
      }
      {
        adminMode && <button id={id} onClick={edit}>{editing ? 'Ok': 'Edit'}</button>
      }
    </section>
  )
}
export default Task
