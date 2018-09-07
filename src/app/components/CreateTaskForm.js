import React from 'react'
import Modal from 'react-modal';
import { customStyles } from '../helpers'
import Task from './Task'

const CreateTaskForm = ({ values, addTask, showModal, onChange, formErrors, toggleModal }) => {
  return (
    <form className="create-input-container" onChange={onChange}>
      <section>
        <label htmlFor="username">username</label>
        <input className={formErrors.username ? 'error' : ''} type="text" name="username" defaultValue={values.username}/>
      </section>
      <section>
        <label htmlFor="email">Email address</label>
        <input className={formErrors.email ? 'error' : ''} type="text" name="email" defaultValue={values.email}/>
      </section>
      <section>
        <label htmlFor="text">Task text</label>
        <input className={formErrors.text ? 'error' : ''} type="text" name="text" defaultValue={values.text}/>
      </section>
      <section>
        <label htmlFor="image">Upload image</label>
        <input className={formErrors.image ? 'error' : ''} type="file" name="image"/>
      </section>
      <button onClick={addTask}>Add</button>
      <button onClick={toggleModal}>Preview</button>
      <Modal
          isOpen={showModal}
          contentLabel="Example Modal"
          style={customStyles()}
          ariaHideApp={false}
        >
          <Task text={values.text} id={1} imgPath={values.image}/>
            <button onClick={toggleModal}>Ok</button>
      </Modal>
    </form>
  )
}

export default CreateTaskForm
