import React from 'react'
import Task from './Task'

const TasksList = ({ isLoad, tasks, isErr, adminMode, done }) => {
  return (
    <div>
      {
        !isLoad && tasks && <h3>All task: </h3>
      }
      {
        isLoad && !isErr
        ? 'Loading...'
        : tasks && tasks.map(item =>
          <Task key={item.id}
                id={item.id}
                text={item.text}
                deleteTask={this.deleteTask}
                imgPath={item.image_path}
                adminMode={adminMode}
                done={done}
                />)
      }
      {
        tasks.length ? null : <h3 className="err-text">Nothing found:(</h3>
      }
      {
        isErr && <h3 className="err-text">Something went wrong:(</h3>
      }
    </div>
  )
}

export default TasksList
