import { tasksWithoutDelete } from '../helpers'
import { getTask, createTask, sortByVal } from '../api.js'

const GET_TASKS = 'GET_TASKS'
const GET_TASKS_OK = 'GET_TASKS_OK'
const GET_TASKS_ERR = 'GET_TASKS_ERR'
const CREATE_TASK = 'CREATE_TASK'
const CREATE_TASK_OK = 'CREATE_TASK_OK'
const CREATE_TASK_ERR = 'CREATE_TASK_ERR'
const SORT = 'SORT'
const SORT_OK = 'SORT_OK'
const SORT_ERR = 'SORT_ERR'
const ON_ADMIN_MODE = 'ON_ADMIN_MODE'

const initialState = {
  tasks: [],
  load: false,
  err: '',
  adminMode: false
}

export function getTasks() {
  return async dispatch => {
    dispatch({ type: GET_TASKS })

    try {
      const data = await getTask()
        dispatch({
          type: GET_TASKS_OK,
          payload: data.message.tasks
        })
       } catch (err) {
        dispatch({
          type: GET_TASKS_ERR,
          payload: err
        })
      }
    }
  }
export function onAdminMode (){
  return dispatch => {
    dispatch({
      type: ON_ADMIN_MODE,
      payload: true
    })
  }
}
export function createTaks(task) {

  return async dispatch => {
    dispatch({ type: CREATE_TASK })
    try {
      const data = await createTask(task.username, task.email, task.text, task.image)
        dispatch({
          type: CREATE_TASK_OK,
          payload: data.data.message
        })
       } catch (err) {
        dispatch({
          type: CREATE_TASK_ERR,
          payload: err
        })
      }

  }
}

export function sortBy(arg) {
  return async dispatch => {
    dispatch({ type: SORT })
    try {
      const data = await sortByVal(arg)
        dispatch({
          type: SORT_OK,
          payload: data.data.message.tasks
        })
       } catch (err) {
        dispatch({
          type:  SORT_ERR,
          payload: err
        })
      }

  }
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
