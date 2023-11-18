import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "../home/home.css";

const Home = () => {
  return (
    <div>
        <Topbar />
        <div className="homeContainer">
           <Sidebar />
           <Feed />
        </div>
    </div>
  )
}

export default Home;