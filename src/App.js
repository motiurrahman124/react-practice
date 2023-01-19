import Calculator from "./components/Calculator";
import ClickCounter from "./components/ClickCounter";
import ClockList from "./components/ClockList";
import Bracket from "./components/composition/Bracket";
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Form from "./components/Form";
import HoverCounter from "./components/HoverCounter";
import Logo from "./components/Logo";
import Todo from "./components/Todo";
import Tutorial from "./components/Tutorial";
import User from "./components/User";

//link with external css file
import "./assets/css/global.css";
import './assets/css/dark.css';

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
    <>
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Welcome name="Hary" />
        <ClockList quantities={quantities} />
        <Form />
        <Calculator />
        {/* <Emoji>
        {({addEmoji})=><Text addEmoji={addEmoji}/>}
      </Emoji> */}
        <Emoji>
          {({ addEmoji }) => (
            <Bracket>
              {({ addBracket }) => (
                <Text addEmoji={addEmoji} addBracket={addBracket} />
              )}
            </Bracket>
          )}
        </Emoji>
        <br />
        <ClickCounter />
        <br />
        <HoverCounter />
        <br />
        <User name={(isLoggedIn) => (isLoggedIn ? "Motiur" : "Guest")} />
        <Todo />
      </div>
      <br /><br />
      <div className="App">
        <h1>Css Styles Practice</h1>
        <Logo/>
      </div>
      <Tutorial/>
    </>
  );
}

export default App;
