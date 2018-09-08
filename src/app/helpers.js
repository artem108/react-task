
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

export const createPaginate = (page, rows) => {
    const newPage = page + 1
    const countItems = 10
    const first = rows.splice(newPage * countItems, rows.size - newPage * countItems)
    const second = first.splice(0, newPage * countItems - countItems)

    return second
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
