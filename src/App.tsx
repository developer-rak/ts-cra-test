import './App.css';

// conventional props
function Heading({ title }: { title: string }) {
  return <h1>{ title }</h1>
}
function HeadingWithContent({ children }: { children: string }) {
  return <h1>{ children }</h1>
}

function App() {
  return (
    <div>
      <Heading title='Hello'></Heading>
      <HeadingWithContent>Hi!</HeadingWithContent>
    </div>
  );
}

export default App;
