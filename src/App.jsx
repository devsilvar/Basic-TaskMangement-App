import "./App.css";
import TodoListWrapper from "./Components/TodoListWrapper";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <>
      <TodoListWrapper />
    </>
  );
}

export default App;
library.add(fab, fas, far);
