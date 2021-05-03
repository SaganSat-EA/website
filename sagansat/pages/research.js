function Research() {
	return (
		<div className="projects-section bg-black" id="projects">
			<div className="container">
				<div className="row align-items-center no-gutters mb-4 mb-lg-5">
					<div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg" alt="" /></div>
					<div className="col-xl-4 col-lg-5">
						<div className="featured-text text-white-50 text-center text-lg-left">
							<p className="text-white-50 mb-0">
								Nosso objetivo é projetar um cubesat para monitorar algumas rotas de aeronaves comerciais
								onde podem acontecer possíveis acidentes causados pela pluma vulcânica. Nosso projeto se
								encontra em fase avançada, iniciamos nossas pesquisas em 2019, no início como base para nosso
								projeto utilizamos um cubesat já existente que obteve sucesso em sua missão. Porém algumas partes
								estavam diferente do que pensávamos e tivemos que refazer do zero as certas peças do satélite,
								como o OBDH, estrutura, dentre outras.
							</p>
						</div>
					</div>
					<div className="">
						<div className="text-white-50">
							<p className="text-white-50 mb-0">
								No ano de 2020, conquistamos o 2º lugar na primeira Olimpíada Brasileira de Satélites realizada pelo MCTI,
								foi o primeiro reconhecimento do nosso trabalho, desde lá estamos ainda mais engajados na construção do satélite,
								o SaganSat não é apenas educacional como a maioria dos nano satélites propostos, é um projeto totalmente funcional.
							</p>
							<h4>Como funciona?</h4>
							<p className="text-white-50 mb-0">
								De forma geral, nosso satélite é composto por de 6 partes extremamente importantes:<br /><br />
								OBDH, que é o computador de bordo do satélite, resposável por processar todas as informações geradas pela câmera,
								é graças a ele que podemos ver as imagens capturadas. Após a caputura o OBDH entra em ação processando os dados e
								guardando na memória para enviá-los assim que possível.<br /><br />

								O ADCS é responsável pelo controle de altitude do SaganSat, independente do OBDH ele utiliza sensores de imagem e
								magnetômetros para orientar o CubeSat na melhor posição.<br /><br />

								O PMAD é o gerenciador da energia, esse módulo capta a energia solar através de uma placa fotovoltaica, carrega a
								bateria e faz a distribuição de energia pelo satélite.<br /><br />

								A placa TT&C faz toda a comunicação com uma base no planeta.<br /><br />

								Estrutura que protege todas as demais peças de vibrações e outros perigos.<br /><br />

								E por fim, a câmera principal, que faz toda a captura de imagens para serem pós-processadas aqui na Terra.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Research