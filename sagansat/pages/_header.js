function Header({ Component, pageProps }) {
	return (
		<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div class="container">
				<a class="navbar-brand js-scroll-trigger" href="#page-top">SaganSat</a>
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					Menu
                    <i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Sobre a equipe</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="pesquisa.html">Sobre a pesquisa</a></li>
						<li class="nav-item"><a class="nav-link js-scroll-trigger" href="ajudar.html">Como você pode ajudar?</a></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header