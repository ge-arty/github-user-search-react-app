import "./reset/reset.css";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import User from "./User";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("octocat");
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      console.log(response.data);
      setData(response.data);
      setShow(true);
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <Search />
      {show && <User src={data.avatar_url} />}
    </div>
  );
}

export default App;
