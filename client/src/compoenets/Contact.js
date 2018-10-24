import React, { Component } from 'react';

const style = {
  btnColor:{
    backgroundColor: '#4A3F89',
    width:'80px',
    textAlign: 'center'
  }
}
class Contact extends Component {
  state = {
    emailAddress: '',
    message: '',
  }

  handleEmail(event) {
    this.setState({ emailAddress: event.target.value });
  }
  handleMessage(event) {
    this.setState({ message: event.target.value });
  }

  onSubmit(event){
    event.preventDefault();
    console.log('email sent')
    console.log(this.state)
  }

  render(){
    return (
      <div className='w-100 pa3 mh2'>
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Contact Me!</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email" name="email-address"  id="email-address"
              onChange={event => this.handleEmail(event) }/>
            </div>
            <div className='pt2'>
              <label htmlFor="mail" className="f6 b db mb2">Email Body</label>
              <textarea id="mail" name="mail" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" aria-describedby="mail-desc"
              onChange={event => this.handleMessage(event) }></textarea>
            </div>
          </fieldset>
          <div className="">
            <input style={style.btnColor} className="input-reset bg-transparent grow pointer f6 link dim br-pill ph3 pv2 mb2 dib white"
            type="submit" value="Send" onClick={event => this.onSubmit(event) }/>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact;
