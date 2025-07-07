import { Suspense } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <>
      <h1>Quick React</h1>
      <Suspense fallback={<p>Loading Counter 1...</p>}>
        <Counter label="Counter 1" />
      </Suspense>
      
      <Suspense fallback={<p>Loading Counter 2...</p>}>
        <Counter label="Counter 2">
          <p>This is a child element inside Counter 2</p>
        </Counter>
      </Suspense>
      
      <Suspense fallback={<p>Loading Counter 3...</p>}>
        <Counter label="Counter 3" />
      </Suspense>
    </>
  )
}

export default App