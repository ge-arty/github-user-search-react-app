import "./reset/reset.css";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import User from "./User";
import { useEffect, useState } from "react";
import { Context } from "./Context";

function App() {
  const [username, setUsername] = useState("octocat");
  const [searchInp, setSearchInput] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(false);
  const [fetched, setFetched] = useState(false);

  function getInfo() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("something went wrong");
      })
      .then((responseJson) => {
        setData(responseJson);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setFetched(true);
      });
  }
  useEffect(() => {
    // axios.get(`https://api.github.com/users/${username}`).then((response) => {
    //   console.log(response.data);
    //   setData(response.data);
    //   setShow(true);
    // });
    getInfo();
  }, [username]);
  function changeUser(event) {
    setSearchInput(event.target.value);
  }
  function searchClick() {
    setUsername(searchInp);
    setFetched(false);
  }
  function changeColor() {
    setTheme((current) => !current);
  }
  return (
    <div
      className="app"
      style={
        theme == true
          ? { backgroundColor: "#141D2F" }
          : { backgroundColor: "#F6F8FF" }
      }
    >
      <Context.Provider value={{ switch: theme, fetched: fetched }}>
        <Header changeColor={changeColor} />
        <Search onChange={changeUser} Click={() => searchClick()} />
        {show && (
          <User
            src={data.avatar_url}
            name={data.name}
            login={data.login}
            joinDate={data.created_at}
            bio={data.bio}
            publicRepos={data.public_repos}
            followers={data.followers}
            following={data.following}
            location={data.location}
            twitter={data.twitter_username}
            company={data.company}
            blog={data.blog}
          />
        )}
      </Context.Provider>
    </div>
  );
}

export default App;
