import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksList from '../components/TasksList'
import SortTasks from '../components/SortTasks'
import { getTasks, sortBy } from '../actionCreators/actionCreators'
import { createPaginate } from '../helpers'

class Tasks extends Component {

  state = {
    sortValue: '',
    editing: false,
    total: 1,
    current: 1,
    visiblePage: 3,
    rowsPaginate: []
  }

  componentDidMount() {
    this.props.dispatch(getTasks())
  }

  componentDidUpdate(prevProps) {
    const { tasks } = this.props
    if (prevProps.tasks.length < tasks.length)
      this.props.dispatch(getTasks())
  }

  onChange = ev => {
    const value = ev.target.value
    this.setState({sortValue: value})
  }

  done = ev => {
    console.log(ev.target.id);
  }

  edit = () => {
    this.setState({editing: !this.state.editing})
  }

  sortByVal = () => {
    const { sortValue } = this.state
    if (sortValue) this.props.dispatch(sortBy(sortValue))

    this.setState({sortValue: ''})
  }

  render() {
    const { tasks, isLoad, isErr, adminMode } = this.props
    const { sortValue, editing } = this.state

      return (
        <section className="task-container">
        <SortTasks sortValue={sortValue} sortByVal={this.sortByVal} onChange={this.onChange}/>
          <TasksList
            tasks={tasks}
            isLoad={isLoad}
            isErr={isErr}
            adminMode={adminMode}
            done={this.done}
            edit={this.edit}
            editing={editing}
          />
        </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.main.tasks,
    isLoad: state.main.load,
    isErr: state.main.err,
  }
}
export default connect(mapStateToProps)(Tasks)
