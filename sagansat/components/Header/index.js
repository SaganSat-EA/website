import Link from 'next/link'

function Header({ Component, pageProps }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div className="container">
				<Link href="/">
					<a className="navbar-brand js-scroll-trigger">SaganSat</a>
				</Link>
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					Menu
          <i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link href="/">
								<a className="nav-link js-scroll-trigger">Sobre a equipe</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="research">
								<a className="nav-link js-scroll-trigger">Sobre a pesquisa</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="help">
								<a className="nav-link js-scroll-trigger">Como você pode ajudar?</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header