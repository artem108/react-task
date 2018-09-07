import React from 'react'

const CreateTaskForm = ({ values, addTask, onChange, formErrors }) => {
  return (
    <form className="create-input-container" onChange={onChange}>
      <section>
        <label htmlFor="username">username</label>
        <input className={formErrors.username ? 'error' : ''} type="text" name="username" value={values.username}/>
      </section>
      <section>
        <label htmlFor="email">Email address</label>
        <input className={formErrors.email ? 'error' : ''} type="text" name="email" value={values.email}/>
      </section>
      <section>
        <label htmlFor="text">Task text</label>
        <input className={formErrors.text ? 'error' : ''} type="text" name="text" value={values.text}/>
      </section>
      <section>
        <label htmlFor="image">Upload image</label>
        <input className={formErrors.image ? 'error' : ''} type="file" name="image"/>
      </section>
      <button onClick={addTask}>Add</button>
    </form>
  )
}

export default CreateTaskForm
