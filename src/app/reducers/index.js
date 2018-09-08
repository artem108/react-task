import {
    GET_TASKS,
    GET_TASKS_OK,
    GET_TASKS_ERR,
    CREATE_TASK,
    CREATE_TASK_OK,
    CREATE_TASK_ERR,
    SORT,
    SORT_OK,
    SORT_ERR,
    ON_ADMIN_MODE,
  } from '../actionCreators/actions.js'

const initialState = {
  tasks: [],
  load: false,
  err: '',
  adminMode: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_TASKS:
    return {
      ...state,
      load: true
    }
  case GET_TASKS_OK:
    return {
      ...state,
      load: false,
      tasks: action.payload
    }
  case GET_TASKS_ERR:
    return {
      ...state,
      err: action.payload
    }
  case CREATE_TASK:
      return {
        ...state,
        load: true
      }
  case ON_ADMIN_MODE:
    return {
      ...state,
      adminMode: action.payload
    }
  case CREATE_TASK_OK:
      return {
        ...state,
        load: false,
        tasks: state.tasks.concat(action.payload)
        }
  case CREATE_TASK_ERR:
  case SORT:
      return {
        ...state,
        load: true,
        }

  case SORT_OK:
      return {
        ...state,
        load: false,
        tasks: action.payload
        }
  case SORT_ERR:
  default:
    return state
  }
}
