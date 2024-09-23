import { ReactElement, ReactNode } from 'react';
import './App.css';

// conventional props
function Heading({ title }: { title: string }) {
  return <h1>{ title }</h1>
}
function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
  return <h2>{ children }</h2>
}

function App() {
  return (
    <div>
      <Heading title='Hello'></Heading>
      <HeadingWithContent><strong>Hi!</strong></HeadingWithContent>
    </div>
  );
}

export default App;
