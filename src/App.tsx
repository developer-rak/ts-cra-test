import { ReactElement, ReactNode, useState } from 'react';
import './App.css';

// conventional props
function Heading({ title }: { title: string }) {
  return <h1>{ title }</h1>
}
function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
  return <h2>{ children }</h2>
}

// default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({ 
    heading, 
    children 
  }: ContainerProps ): ReactElement {
  return <div><h2>{ heading }</h2>{ children }</div>
}
Container.defaultProps = defaultContainerProps;

// Functional props
function TextWithNumber ({
  header,
  children,
}: {
  header: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, stateSet] = useState(1);

  return (
    <div>
      <h2>{header(state)}</h2>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Heading title='Hello'></Heading>
      <HeadingWithContent><strong>Hi!</strong></HeadingWithContent>
      <Container>Foooo</Container>
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Today's number is {num}</div>}
      </TextWithNumber>
    </div>
  );
}

export default App;
