function Projects() {
  return (
    <div className="projects-section bg-light" id="projects">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/rotas.jpg" alt="" /></div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Rotas alternativas</h4>
              <p className="text-black-50 mb-0">No futuro, quando o SaganSat encontrar algum problema nas rotas comerciais das aeronaves, serão enviados avisos e sugestões de rotas alternativas pelo site!</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6"><img className="img-fluid" src="assets/img/hardware.jpg" alt="" /></div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Projeto aberto</h4>
                  <p className="mb-0 text-white-50">Nosso projeto estará disponível no github quando finalizado, fique de olho e não deixe de acessar!</p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6"><img className="img-fluid" src="assets/img/ia.jpg" alt="" /></div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Inteligência artificial</h4>
                  <p className="mb-0 text-white-50">Nosso satélite conta com inteligência artifical para o pós-processamento da imagem.</p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects