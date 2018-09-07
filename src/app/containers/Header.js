import React, { Component } from 'react'
import Modal from 'react-modal';
import { connect } from 'react-redux'
import { onAdminMode } from '../modules/index'
import HeaderLogIn from '../components/HeaderLogIn'

class Header extends Component {
  state = {
    showModal: false,
    login: '',
    password: '',
    errText: ''
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  onChange = ev => {
    const value = ev.target.value
    const name = ev.target.name

    this.setState({[name]: value})
  }

  submit = () => {
    const { login, password } = this.state

    // if (login === 'admin' && password === '123' ) {
      this.props.dispatch(onAdminMode())
      this.toggleModal()
      this.setState({
        login: '',
        password: '',
        errText: ''
      })
    // } else {
    //   this.setState({errText: 'Wrong password or login'})
    // }
  }

render() {
  const { showModal, errText } = this.state

  return (
      <HeaderLogIn
        toggleModal={this.toggleModal}
        onChange={this.onChange}
        submit={this.submit}
        showModal={showModal}
        errText={errText}
      />
    )
  }
}

export default connect()(Header)
