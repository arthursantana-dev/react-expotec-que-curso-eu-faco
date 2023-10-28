import { useEffect, useState } from 'react';
import './App.css';
import Test from './components/Test';
import TestResult from './components/TestResult';

function App() {
	const [hasAnsweredTest, setHasAnsweredTest] = useState(false)
	const [testData, setTestData] = useState()

	// return <TestResult setHasAnsweredTest={setHasAnsweredTest} hasAnsweredTest={hasAnsweredTest} testData={testData}/>

	if (hasAnsweredTest) return <TestResult setHasAnsweredTest={setHasAnsweredTest} hasAnsweredTest={hasAnsweredTest} testData={testData}/>

	return  <Test setHasAnsweredTest={setHasAnsweredTest} setTestData={setTestData}/>
}

export default App;
