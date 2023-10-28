export default function Footer() {
	return(
		<footer className="text-center text-lg-start bg-white text-muted">
			<hr />
			<section className="">
				<div className="container text-center text-md-start mt-5">

					<div className="row mt-3">
						<img id="img-footer" src="../assets/logo-bw-completa.png" alt="" />

						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

							<p>
								<a href="http://www.etecjau.com.br/etecjau/links/cursos/ensino_medio.php"
									className="text-reset">A Etec</a>
							</p>
							<p>
								<a href="http://www.etecjau.com.br/etecjau/links/cursos/ensino_medio.php"
									className="text-reset">Os Cursos</a>
							</p>
							<p>
								<a href="https://github.com/arthursantana-dev" className="text-reset">O Desenvolvedor</a>
							</p>

						</div>

					</div>

				</div>
			</section>

			<div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
				© 2023 Etec Jaú - 2ºDS -
				<a className="text-reset fw-bold" href="https://github.com/arthursantana-dev">Arthur Santana</a>
			</div>

		</footer>
	)
}