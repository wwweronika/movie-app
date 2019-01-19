import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'



const FormFirstPage = props => {
  const { handleSubmit } = props
  
  return (
    <form onSubmit={handleSubmit} style={{fontSize:"18px"}}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="Imię"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Nazwisko"
      />
      <Field 
      name="email" 
      type="email" 
      component={renderField} 
      label="E-mail" />

      <div style={{textAlign:"center"}}>
        <button type="submit" className="next" style={{width:"150px", height:"30px"}}>
          Dalej
        </button>
      </div>
      
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FormFirstPage)