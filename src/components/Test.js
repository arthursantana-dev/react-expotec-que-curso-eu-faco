import { useEffect, useState } from 'react';
import '../App.css';
import QuestionComponent from './QuestionComponent';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Test(props) {
	class Question {
		constructor(question, radioButtonType, ADMPoints, DSPoints, MECAPoints, EDFPoints) {
			this.question = question
			this.radioButtonType = radioButtonType
			this.ADMPoints = ADMPoints
			this.DSPoints = DSPoints
			this.MECAPoints = MECAPoints
			this.EDFPoints = EDFPoints
		}
	}

	const [radioButtonToAnswerId, setRadioButtonToAnswerId] = useState(0)
	const [data, setData] = useState([])
	const [totalAnswers, setTotalAnswers] = useState(0)
	const [aswersValues, setAnswersValues] = useState(Array(data.length).fill(0))
	const [isProcessingTest, setIsProcessingTest] = useState(false)


	const fixedData = [
		new Question('Gosto de Matemática 🧮📐', 'muito/pouco', 5, 5, 5, 4),
		new Question('Lido bem com Pessoas 🏬', 'muito/pouco', 5, 3, 3, 4),
		new Question('Curto robôs 🤖', 'muito/pouco', 3, 5, 5, 3),
		new Question('Me identifico com as Ciências Exatas 🔭🔬', 'muito/pouco', 4, 5, 5, 4),
		new Question('Gosto de cubo-mágico, xadrez, damas e outros jogos ♟️', 'muito/pouco', 4, 5, 3, 3),
		new Question('Gostava de brinquedos de construção na infância, como Lego 🧰', 'muito/pouco', 3, 4, 3, 5),
		new Question('Me identifico as Ciências Humanas 📖⏳', 'muito/pouco', 5, 3, 3, 5),
		new Question('Gosto de videogames 🎮', 'muito/pouco', 2, 5, 4, 3),
		new Question('Tenho senso de liderança 📈', 'sim/nao', 5, 3, 3, 4),
		new Question('Prefiro fazer trabalhos sozinho(a) 🧍', 'sim/nao', 3, 5, 4, 3),
		new Question('Gosto de ler/escrever histórias e textos 📖✍️', 'sim/nao', 5, 5, 3, 3),
		new Question('Sou criativo(a) 💭', 'muito/pouco', 5, 5, 3, 4),
		new Question('Sou organizado(a) 📚', 'muito/pouco', 5, 5, 3, 3),
		new Question('Sou fanático(a) por tecnologia 👩‍💻👨‍💻', 'muito/pouco', 3, 5, 4, 3),
		new Question('Gosto de desenhar ✏️🖌️', 'muito/pouco', 3, 3, 4, 5),
		new Question('Casas inteligentes me chamam a atenção 🏡📱', 'sim/nao', 3, 4, 5, 3),
		new Question('Sou curioso(a) sobre como as empresas funcionam 🏢📋', 'muito/pouco', 5, 4, 4, 3),
		new Question('Sou curioso(a) sobre como fábricas funcionam 🎛️⚙️', 'muito/pouco', 4, 3, 5, 3),
		new Question('Sou fascinado por arquitetura e construção civil 👷🧱', 'sim/nao', 4, 3, 3, 5),
		new Question('Gosto de cuidar de detalhes em projetos 📋', 'muito/pouco', 4, 4, 3, 4),
		new Question('Gosto de ambientes de escritório 🏢', 'muito/pouco', 5, 5, 3, 3),
		new Question('Tenho interesse em inteligência artificial 🤖💭', 'sim/nao', 3, 5, 4, 3),
		new Question('Gosto de competições acadêmicas 🏅', 'muito/pouco', 4, 5, 4, 3),
		new Question('Gosto e mexo com design gráfico (Photoshop, CorelDraw, etc.) 💻🖼️', 'muito/pouco', 3, 5, 4, 4),
		new Question('Consigo explicar coisas difíceis facilmente ⚙️💭', 'muito/pouco', 5, 4, 3, 3),
		new Question('Gosto de trabalhar ao ar livre 🏞️🏕️', 'sim/nao', 3, 3, 3, 5),
		new Question('Tenho habilidades artísticas 🎨🖌️✍️', 'muito/pouco', 3, 3, 4, 5),
		new Question('Sou curioso(a) sobre tudo 🤔', 'sim/nao', 5, 4, 3, 4),
		new Question('Gosto de aprender sobre novas tecnologias 💻', 'muito/pouco', 4, 5, 4, 3),
		new Question('Tenho interesse em empreendedorismo 🏢', 'sim/nao', 5, 4, 3, 4),

	]

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	useEffect(() => { setData(shuffleArray(fixedData)); window.scrollTo({top: 0, behavior: 'smooth'}) }, [])

	function calculateCourse() {
		setIsProcessingTest(true)

		let testResults = { adm: 0, ds: 0, meca: 0, edf: 0 }
		let totalPoints = { adm: 0, ds: 0, meca: 0, edf: 0 }

		aswersValues.forEach((a, i) => {
			testResults.adm += a * data[i].ADMPoints
			testResults.ds += a * data[i].DSPoints
			testResults.meca += a * data[i].MECAPoints
			testResults.edf += a * data[i].EDFPoints

			totalPoints.adm += 5 * data[i].ADMPoints
			totalPoints.ds += 5 * data[i].DSPoints
			totalPoints.meca += 5 * data[i].MECAPoints
			totalPoints.edf += 5 * data[i].EDFPoints
		});

		totalPoints.adm *= 1.02
		totalPoints.ds *= 1.01
		totalPoints.meca *= 1.05
		totalPoints.edf *= 1.02

		const coursesAffinity = [
			{
				name: 'adm',
				fullName: 'Administração',
				affinity: parseFloat((testResults.adm / totalPoints.adm) * 100)
			},
			{
				name: 'ds',
				fullName: 'Desenvolvimento de Sistemas',
				affinity: parseFloat((testResults.ds / totalPoints.ds) * 100)
			},
			{
				name: 'meca',
				fullName: 'Mecatrônica',
				affinity: parseFloat((testResults.meca / totalPoints.meca) * 100)
			},
			{
				name: 'edf',
				fullName: 'Edificações',
				affinity: parseFloat((testResults.edf / totalPoints.edf) * 100)
			}

		]

		let testResultsData = {
			adm: parseFloat(coursesAffinity[0].affinity).toFixed(1),
			ds: parseFloat(coursesAffinity[1].affinity).toFixed(1),
			meca: parseFloat(coursesAffinity[2].affinity).toFixed(1),
			edf: parseFloat(coursesAffinity[3].affinity).toFixed(1)
		}

		coursesAffinity.sort((a, b) => {
			if (b.affinity - a.affinity != 0) return b.affinity - a.affinity

			return Math.random() - 0.5
		})

		testResultsData.idealCourse = coursesAffinity[0].name

		function formatData(data) {
			const year = data.getFullYear();
			const month = padLeft(data.getMonth() + 1, 2);
			const day = padLeft(data.getDate(), 2);
			const hours = padLeft(data.getHours(), 2);
			const minutes = padLeft(data.getMinutes(), 2);
			const seconds = padLeft(data.getSeconds(), 2);

			return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
		}

		function padLeft(value, span, char = '0') {
			return String(value).padStart(span, char);
		}

		const currentData = new Date();

		const formattedDate = formatData(currentData);

		testResultsData.dateTime = formattedDate

		props.setTestData(testResultsData)

		fetch('https://qcef-api-arthur-santanas-projects.vercel.app', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => response.json()).then(data => console.log(`Aquecimento da API: ${data}`))




		setTimeout(() => {
			fetch('https://qcef-api-arthur-santanas-projects.vercel.app', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(testResultsData)
			})

			props.setHasAnsweredTest(true)
		}, 3000);

	}

	useEffect(() => {
		setInterval(() => {
			fetch('https://qcef-api-arthur-santanas-projects.vercel.app', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => response.json()).then(data => console.log(`Aquecimento da API: ${data}`))
		}, 10000)
	}, [])

	return (<>
		<NavBar data={data} totalAnswers={totalAnswers} showProgressBar={true} setHasAnsweredTest={props.setHasAnsweredTest} />

		<section className="hero">
			<img src={require("../assets/logo-colorida-longa.png")} alt="" />
			<p>
				Quer entrar na Etec mas não sabe qual o melhor curso do ETIM pra você? Tire sua dúvida aqui!
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
		<hr id="hr" />
		<main>
			{
				data.map((q, i) => {
					let maxName = ""
					let minName = ""

					if (q.radioButtonType == 'sim/nao') {
						maxName = 'Sim'
						minName = 'Não'
					} else if (q.radioButtonType == 'muito/pouco') {
						maxName = 'Muito'
						minName = 'Pouco'
					}

					return <QuestionComponent key={i} i={i} q={q} maxName={maxName} minName={minName} radioButtonToAnswerId={radioButtonToAnswerId} setRadioButtonToAnswerId={setRadioButtonToAnswerId}
						totalAnswers={totalAnswers} setTotalAnswers={setTotalAnswers} answersValues={aswersValues} setAnswersValues={setAnswersValues} />
				})
			}
		</main>
		<div id="div-submit">

			{isProcessingTest ?
				(<div class='loader'></div>)

				:

				(<button id="submit-button"
					className={`btn btn-primary btn-lg submit-button ${totalAnswers == data.length ? '' : 'disabled'} `}
					onClick={() => calculateCourse()}>
					<span>
						<span>
							Terminar Teste
						</span>
					</span>
				</button>)}

		</div>


		<Footer/>
	</>)
}