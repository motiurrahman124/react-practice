
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
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Welcome name="Hary" />
    </div>
  );
}

export default App;
