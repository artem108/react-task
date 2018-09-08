import { tasksWithoutDelete } from '../helpers'
import { getTask, createTask, sortByVal } from '../api.js'
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
  } from './actions.js'

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
