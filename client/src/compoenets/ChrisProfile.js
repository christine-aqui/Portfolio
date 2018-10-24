import React, { Component } from 'react';
import Me from './image/Profile/Me.jpeg';
import Footer from './Footer';

class ChrisProfile extends Component {

  render() {
    return(
      <section className="tc pa3 pa5-ns">
        <article className="hide-child relative b--black-20 mw5 center">
          <img src={Me} className="db" alt="Photo of Chris"  alt='my picture'></img>
          <div className="pa2 bt b--black-20">
            <h1 className="f4 animated pulse infinite">Christine Aqui</h1>
            <hr className="mw3 bb bw1 b--black-10"></hr>
          </div>
          <Footer />
        </article>
      </section>
    )
  }
}

export default ChrisProfile;