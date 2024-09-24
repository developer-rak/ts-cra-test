import { Component, ReactElement, ReactNode, useState } from 'react';
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
  header?: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, stateSet] = useState(1);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}

// function with generics
// List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}


// Class Components
class MyHeader extends Component<{
  title: ReactNode,
}> {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

function App() {
  return (
    <div>
      <Heading title='Hello'></Heading>
      <HeadingWithContent><strong>Hi!</strong></HeadingWithContent>
      <Container>Foooo</Container>
      <TextWithNumber>
        {(num: number) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      {/* function with generics */}
      <List
        items={["RashiD", "AroosA", "koM"]}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      ></List>
      <MyHeader title="There yeh go!"></MyHeader>
    </div>
  );
}

export default App;
