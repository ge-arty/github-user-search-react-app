import "./reset";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import User from "./User";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("octocat");
  useEffect(() => {
    axios.get(`https://api.github.com/users/:${username}`).then((response) => {
      console.log(response.data.data);
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <Search />
      <User />
    </div>
  );
}

export default App;
