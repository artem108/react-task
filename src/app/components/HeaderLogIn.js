import React, { Component } from 'react'
import Modal from 'react-modal';
import { customStyles } from '../helpers'

const HeaderLogIn = ({ toggleModal, onChange, submit, showModal, errText }) => {
  return (
    <header className="header">
      <section>
        <h3>Created by Artem Arshaniy</h3>
      </section>
      <section>
      </section>
      <section>
        <h3>Log in as admin</h3>
        <button onClick={toggleModal}>Log in</button>
      </section>
      <Modal
          isOpen={showModal}
          contentLabel="Example Modal"
          style={customStyles()}
        >
        <section className="login-admin">
        <h3 className="err-text">{errText}</h3>
          <button onClick={toggleModal}>Exit</button>
          Login:
          <input type="text" name="login" onChange={onChange}/>
          Password:
          <input type="text" name="password" onChange={onChange}/>
          <button onClick={submit}>Submit</button>
        </section>
        </Modal>
    </header>
    )
}

export default HeaderLogIn
