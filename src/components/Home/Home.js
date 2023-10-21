import { data } from "../data/celebrities";
import Searchbar from "./Searchbar";

function Home() {

  
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h3>List View</h3>
        <Searchbar data={data} />
        {/* <Accordion data={data} /> */}
      </div>
    </div>
  );
}

export default Home;
