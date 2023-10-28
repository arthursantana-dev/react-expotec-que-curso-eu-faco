export default function NavBar(props) {
	return(
		<nav className="navbar navbar-expand-lg bg-body-tertiary nav">
			<div className="container-fluid">
				<span>
					<img id="img-navbar" src={require("../assets/logo-colorida-simples.png")} />
					<h1>Que Curso eu Faço?</h1>
				</span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" onClick={() => props.setHasAnsweredTest(false)}>O Quiz</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${props.hasAnsweredTest? '' : 'disabled'}`} aria-current="page" onClick={() => props.setHasAnsweredTest(true)}>Resultado</a>
						</li>
					</ul>
				</div>
			</div>
			{props.showProgressBar? (<> <p className="nav-progress__value">{`${props.totalAnswers}/${Array.from(props.data).length}`}</p>
			<div className="nav-progress-container">
				<div className="nav-progress-bar" style={{ width: `${100 - (props.totalAnswers / Array.from(props.data).length) * 100}%` }}></div>
			</div></>) : ''}

			
		</nav>
	)
}