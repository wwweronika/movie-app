
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import moment from 'moment';

const hours = ['12:00', '14:00', '16:00', '19:00', '21:00', '23:00']
const days = ['Dzisiaj', 'Jutro',  moment().add(2, 'days').format('dddd'), moment().add(3, 'days').format('dddd'), moment().add(4, 'days').format('dddd')]

const renderHourSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Godzina seansu</option>
      {hours.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const renderDaySelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value="">Dzień seansu</option>
        {days.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )

const FormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit} style={{fontSize:"18px"}}>
      <div>
        <label>Godzina seansu</label>
        <Field name="seanshour" component={renderHourSelector} />
      </div>
      
      <div>
        <label>Dzień seansu</label>
        <Field name="seansday" component={renderDaySelector} />
      </div>

      <div style={{textAlign:"center"}}>
        <button type="button" className="previous" onClick={previousPage} style={{width:"300px", height:"50px", marginTop:"30px"}}>
          Wstecz
        </button>
        <button type="submit" style={{width:"300px", height:"50px", marginTop:"30px"}} disabled={pristine || submitting}>
            Rezerwuj!
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
})(FormThirdPage)