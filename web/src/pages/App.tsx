import { LatestPosts } from "../components/latestPosts/LatestPosts";
import { Perfil } from "../components/perfil/Perfil";
import { Project } from "../components/project/Project";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style['app-content']}>      
      <Perfil/>

      <Project/>

      <LatestPosts/>

    </div>
  );
}

export default App;
