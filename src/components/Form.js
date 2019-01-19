import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormFirstPage from './FormFirstPage'
//import FormSecondPage from './FormSecondPage'
import FormThirdPage from './FormThirdPage'

class ReservationForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div className="ui form">
        {page === 1 && <FormFirstPage onSubmit={this.nextPage} />}
        {/* {page === 2 && (
          <FormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )} */}
        {page === 2 && (
          <FormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    )
  }
}

ReservationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ReservationForm