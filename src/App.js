import ClockList from './components/ClockList';
import Form from './components/Form';
import Calculator from './components/Calculator';
// function App() {
//   return (
//     <h1 className="heading">
//       <span>Hellow {new Date().toLocaleTimeString()}</span>
//     </h1>
//   );
// }

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  const quantities = [1, 2, 3];
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Welcome name="Hary" />
      <ClockList quantities={quantities}/>
      <Form/>
      <Calculator/>
    </div>
  );
}





export default App;
