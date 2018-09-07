import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Task from './Tasks'
import CreateTask from './CreateTask'

class Main extends Component {
  render() {
    const { adminMode } = this.props

    return (
      <section className="main-container">
        <Header />
        <section>
          <CreateTask />
          <Task adminMode={adminMode} />
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminMode: state.main.adminMode
  }
}

export default connect(mapStateToProps)(Main)
