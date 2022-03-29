import NavBar from "../navBar/NavBar";
import MainForm from "../mainForm/MainForm";
import Demo from "../demo/demo";

function App() {
  return (
    <div className="App">
      <div className="fakeBar">
        <NavBar />

      </div>
      <MainForm />
      <br />
      <Demo />
    </div>
  );
}

export default App;
