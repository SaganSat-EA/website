function SignUp() {
  return (
    <div class="signup-section" id="signup">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 class="text-white mb-5">Faça contato conosco</h2>
            <form method="POST" action="https://formspree.io/f/mnqogedl" class="form">
              <input class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" name="inputText" placeholder="Digite sua dúvida..." />
              <input class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" name="inputEmail" placeholder="Digite seu e-mail..." />
              <input class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" name="inputName" placeholder="Digite seu nome..." />
              <input class="btn btn-primary mx-auto" type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp