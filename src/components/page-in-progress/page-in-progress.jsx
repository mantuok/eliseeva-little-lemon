import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const PageInProgress = () => {
  return (
    <React.Fragment>
      <Header /> 
      <section className="page-in-progress">Sorry, page in progress...</section>
      <Footer />
    </React.Fragment>
  );
}

export default PageInProgress;