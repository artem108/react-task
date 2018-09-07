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
    hasErrors: false
  }

  addTask = ev => {
    ev.preventDefault()
      const isValid = validateForm(this.state)
      if (isValid.hasErrors) this.setState({formErrors: isValid.formErrors})
      else this.props.dispatch(createTaks(isValid))

  }

  onChange = ev => {
    let value = ev.target.value
    const name = ev.target.name

    if (name === 'image') {
      value = ev.target.files[0]
    }
    this.setState({[name]: value})
  }

  render() {
    return (
    <section className="crearte-task-container">
    <h3>Add task</h3>
      <CreateTaskForm
          addTask={this.addTask}
          values={this.state}
          error={this.state.error}
          onChange={this.onChange}
          formErrors={this.state.formErrors}
        />
        <FormError formErrors={this.state.formErrors} />
    </section>
    );
  }
}

export default connect()(CreateTask)
