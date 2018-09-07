import React from 'react'

const FormErrors = ({ formErrors }) =>{
  return (
    <section className='formErrors'>
      {
        Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName].length > 0) {
            return (
              <h3 className="err-text" key={i}>{fieldName} {formErrors[fieldName]}</h3>
            )
          } else {
            return '';
          }
        })
      }
    </section>
  )
}

export default FormErrors
