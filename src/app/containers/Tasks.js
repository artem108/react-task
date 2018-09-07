import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksList from '../components/TasksList'
import SortTasks from '../components/SortTasks'
import { getTasks, sortBy } from '../modules/index'

class Tasks extends Component {

  state = { sortValue: ''}

  componentDidMount() {
    this.props.dispatch(getTasks())
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks.length < this.props.tasks)
    console.log('update');
    // this.props.dispatch(getTasks())
  }

  onChange = ev => {
    const value = ev.target.value
    this.setState({sortValue: value})
  }

  done = ev => {
    console.log(ev.target.id);
  }

  sortByVal = () => {
    const { sortValue } = this.state
      if (sortValue) this.props.dispatch(sortBy(sortValue))

    this.setState({sortValue: ''})
  }

  render() {
    const { tasks, isLoad, isErr, adminMode } = this.props
    const { sortValue } = this.state

      return (
        <section className="task-container">
        <SortTasks sortValue={sortValue} sortByVal={this.sortByVal} onChange={this.onChange}/>
          <TasksList
            tasks={tasks}
            isLoad={isLoad}
            isErr={isErr}
            adminMode={adminMode}
            done={this.done}
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
