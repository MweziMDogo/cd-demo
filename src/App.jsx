import "./App.css";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Greeting name="Github Actions Test" />
      <UserProfile />
    </>
  );
}

export default App;
