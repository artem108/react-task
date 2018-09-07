import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateTaskForm from '../components/CreateTaskForm'
import Task from '../components/Task'
import { createTaks, deleteTaks, getTasks } from '../modules/index'
import { validateForm } from '../helpers'
import FormError from '../components/FormError'

class CreateTask extends Component {

  state = {
    username: '',
    email: '',
    text: '',
    image: {},
    formErrors: {
      username: '',
      email: '',
      text: '',
      image: ''
    },
    showModal: false,
    hasErrors: false
  }

  addTask = ev => {
    ev.preventDefault()
      const isValid = validateForm(this.state)
      if (isValid.hasErrors) this.setState({formErrors: isValid.formErrors})
      else this.props.dispatch(createTaks(isValid))

  }

  toggleModal = ev => {
    ev.preventDefault()
    this.setState({showModal: !this.state.showModal})
  }

  onChange = ev => {
    let value = ev.target.value
    const name = ev.target.name

    if (name === 'image') 
      value = ev.target.files[0]

    this.setState({[name]: value})
  }

  render() {
    const { formErrors, showModal } = this.state

    return (
      <section className="crearte-task-container">
      <h3>Add task</h3>
        <CreateTaskForm
            addTask={this.addTask}
            values={this.state}
            error={this.state.error}
            onChange={this.onChange}
            formErrors={formErrors}
            showModal={showModal}
            toggleModal={this.toggleModal}
          />
          <FormError formErrors={this.state.formErrors} />
      </section>
    );
  }
}

export default connect()(CreateTask)
