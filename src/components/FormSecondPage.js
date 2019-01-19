import React from 'react'
//import { Field, reduxForm } from 'redux-form'
import {  reduxForm } from 'redux-form'
import validate from './validate'
//import renderField from './renderField'

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false

const FormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit} style={{fontSize:"18px"}}>
      
      <div>Widok sali kinowej</div>
      <div style={{textAlign:"center"}}>
        <button type="button" className="previous" onClick={previousPage} style={{width:"300px", height:"50px", marginTop:"30px"}}>
          Wstecz
        </button>
        <button type="submit" className="next" style={{width:"300px", height:"50px", marginTop:"30px"}}>
          Dalej
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FormSecondPage)