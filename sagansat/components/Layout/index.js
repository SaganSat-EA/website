import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SignUp from '../SignUp';
import Contact from '../Contact';

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div className='container-fluid'>
        <Header />
        {children}
        <SignUp />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Layout
