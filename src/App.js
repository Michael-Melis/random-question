import { questions } from './Data'
import './App.css';
import { useState } from 'react';

function App() {
  const [random, setRandom] = useState(null)
  const randomQuestion = () => {
    setRandom(Math.ceil(Math.random() * questions.length))

  }
  return (
    <div className="App">
      <button onClick={randomQuestion}>Random question</button>
      {/*eslint-disable-next-line array-callback-return */}
      {questions.map((question) => {
        if (question.id === random) {
          return <p key={question.id}>{question.question}</p>
        }
      })}
    </div>
  );
}

export default App;
