import axios from 'axios'

export const getTask = () => {
  return fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Artem')
            .then(res => res.json())
}

export const createTask = (username, email, text, image) => {

  const form = new FormData();
      form.append("username", username);
      form.append("email", email);
      form.append("text", text);
      form.append("image", image, image.name);

  return axios.post('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Artem', form)
}

export const sortByVal = arg => {
  return axios.post(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Artem/sort_field/${arg}`)
}
