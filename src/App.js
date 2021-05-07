import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Custom Title" />
      <div >
        <Modal/>
        <Backdrop/>
      </div>
    </div>
  );
}

export default App;
