import { useState } from "react"

export default function QuestionComponent(props) {

	const [isAnswered, setIsAnswered] = useState(false)

	function handleAnswer(value) {
		let newArray = props.answersValues
		newArray[props.i] = value
		props.setAnswersValues(newArray)

		if(isAnswered) return

		props.setRadioButtonToAnswerId(props.i + 1)
		props.setTotalAnswers(props.totalAnswers + 1)

		setIsAnswered(true)
	}

	return (
		<div class={props.radioButtonToAnswerId < props.i? "question disabled" : "question"} key={props.i}>
			<div class="question__index">
				<p class="question__index__value">Questão <strong>{props.i + 1}</strong></p>
			</div>
			<h1 class="question__question">{props.q.question}</h1>
			<div class="question__radio-wrapper">
				<div class="radio-wrapper">
					<div class="input-radio-wrapper input-radio-wrapper--max">
						<input class="radio-max radio-big radio-positive" type="radio" name={props.i} value="5" onClick={() => handleAnswer(5)} />
					</div>
					<p class="radio-wrapper-desc radio-wrapper-desc--max">{props.maxName}!</p>
				</div>
				<div class="input-radio-wrapper input-radio-wrapper--max-mid">
					<input class="radio-max-mid radio-medium radio-positive" type="radio" name={props.i} value="4" onClick={() => handleAnswer(4)} />
				</div>
				<div class="radio-wrapper">
					<div class="input-radio-wrapper">
						<input class="radio-max-mid" type="radio" name={props.i} value="3" onClick={() => handleAnswer(3)} />
					</div>
					<p class="radio-wrapper-desc radio-wrapper-desc--mid">meh...</p>
				</div>
				<div class="input-radio-wrapper input-radio-wrapper--min-mid">
					<input class="radio-mid radio-medium" type="radio" name={props.i} value="2" onClick={() => handleAnswer(2)} />
				</div>
				<div class="radio-wrapper">
					<div class="input-radio-wrapper input-radio-wrapper--min">
						<input class="radio-mid radio"
							type="radio" name={props.i} value="1" onClick={() => handleAnswer(1)} />
					</div>
					<p class="radio-wrapper-desc radio-wrapper-desc--min">{props.minName}!</p>
				</div>
			</div>
		</div>
	)
}