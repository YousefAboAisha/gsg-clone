import "./App.css";
import Navbar from "./Components/Navbar";
import Coders from "./Containers/Home/coders";
import Freelancers from "./Containers/Home/freelancers";
import Landing from "./Containers/Home/landing";
import Programs from "./Containers/Home/programs";
import Services from "./Containers/Home/services";

function App() {
  return (
    <div className="relative w-full min-h-[3000px]">
      <Navbar />
      <Landing />

      <section>
        <Services />
      </section>

      <section>
        <Programs />
      </section>

      <section>
        <Freelancers />
      </section>

      <section>
        <Coders />
      </section>
    </div>
  );
}

export default App;
