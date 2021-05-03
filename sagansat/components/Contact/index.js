function Contact() {
  return (
    <div className="contact-section bg-black">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center ">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">E-mail</h4>
                <hr className="my-4" />
                <div className="small text-black-50"><a href="#!">felipe.juliano@sagansat.com</a></div>
                <div className="small text-black-50"><a href="#!">jonathan.ferro@sagansat.com</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-flex justify-content-center">
          <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
          <a className="mx-2" href="https://www.instagram.com/sagansat/"><i className="fab fa-instagram"></i></a>
          <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact