import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = {
    name: "Nikolas",
    age: 40,
    getFullName: function () {
      return `${this.name} ${this.age}`;
    },
  };

  return <div>Hello, {user.getFullName()}!</div>;
}

export default App;
