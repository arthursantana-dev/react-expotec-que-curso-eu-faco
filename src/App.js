import { useEffect, useState } from 'react';
import './App.css';
import Test from './components/Test';
import TestResult from './components/TestResult';

function App() {
	const [hasAnsweredTest, setHasAnsweredTest] = useState(false)
	const [testData, setTestData] = useState({adm: "98.0",dateTime: "2023-10-28 11:45:48",ds: "99.0",edf: "98.0",idealCourse: "ds",meca: "95.2"})

	// return <TestResult setHasAnsweredTest={setHasAnsweredTest} hasAnsweredTest={hasAnsweredTest} testData={testData}/>

	if (hasAnsweredTest) return <TestResult setHasAnsweredTest={setHasAnsweredTest} hasAnsweredTest={hasAnsweredTest} testData={testData}/>

	return  <Test setHasAnsweredTest={setHasAnsweredTest} setTestData={setTestData}/>
}

export default App;
