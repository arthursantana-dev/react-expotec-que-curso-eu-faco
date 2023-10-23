import './App.css';

function App() {
  return (
    <body>
	<nav className="navbar navbar-expand-lg bg-body-tertiary nav">
		<div classNameName="container-fluid">
			<span>
				<img id="img-navbar" src="./assets/logo-colorida-simples.png"/>
				<h1>Que Curso eu Faço?</h1>
			</span>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="./index.html">O Quiz</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" aria-current="page" href="#">Resultado</a>
					</li>
				</ul>
			</div>
		</div>
		<p className="nav-progress__value">0</p>
		<div className="nav-progress-container">
			<div className="nav-progress-bar"></div>
		</div>
	</nav>

	<section className="hero">
		<img src="./assets/logo-colorida-longa.png" alt=""/>
		<p>
			Quer entrar na Etec mas não sabe qual o melhor curso pra você? Tire sua dúvida aqui!
		</p>
		<a href="#hr">
			<button className="btn btn-primary btn-lg submit-button">
				<span>
					<span>
						Começar Teste
					</span>
				</span>
			</button>
		</a>

	</section>
	<hr id="hr"/>
	<main>
	</main>
	<div id="div-submit">
		<button id="submit-button" className="btn btn-primary btn-lg submit-button disabled" onclick="calculateCourse()"><span><span>
					Terminar Teste
				</span>
			</span>
		</button>
	</div>


	<footer className="text-center text-lg-start bg-white text-muted">
		<hr/>
		<section className="">
			<div className="container text-center text-md-start mt-5">

				<div className="row mt-3">
					<img id="img-footer" src="./assets/logo-bw-completa.png" alt=""/>

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
		

		
		<div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
			© 2023 Etec Jaú - 2ºDS -
			<a className="text-reset fw-bold" href="https://github.com/arthursantana-dev">Arthur Santana</a>
		</div>
		
	</footer>
	
</body>
  );
}

export default App;
