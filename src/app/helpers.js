
export const createTaskObj = (id, text) => {
  return { id, text }
}

export const tasksWithoutDelete = (id, tasks) => {

  // let deletItem
  //   if (tasks.length < 1) deletItem = tasks.splice(id, 1)
  //   else deletItem = tasks.splice(0, 1)
  //
  //   return [...tasks]
}
export const customStyles = () => {
  return {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }
  }


export const validateForm = (form) => {

  for (let field in form) {
    switch(field) {
      case 'email':
        const emailValid = form[field].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

            if (emailValid) {
              form.formErrors.email = ''
            } else {
              form.hasErrors = true
              form.formErrors.email= 'is invalid'
            }
        break;

      case 'username':
        const usernameValid = form[field].length >= 1;

          if (usernameValid) {
            form.formErrors.username = ''
          } else {
            form.hasErrors = true
            form.formErrors.username = 'is too short'
          }

        break;

      case 'text':
        const textValid = form[field].length >= 1;

          if (textValid) {
            form.formErrors.text = ''
          } else {
            form.hasErrors = true
            form.formErrors.text = 'is too short'
          }

        break;
      case 'image':
        const imgSizeValid = form[field].size < 8388608

        if (imgSizeValid) {
          form.formErrors.image = ''
        } else {
          form.hasErrors = true
          form.formErrors.image = 'image size is too big'
        }

      default:
      break;
    }
  }
  return form
}
