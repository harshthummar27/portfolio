import { Fragment } from "react";
import { HeadingHero } from "./utils/HeadingHero";
import { GrideLine } from "./utils/GrideLine";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contect from "./components/Contect";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Fragment>
      {/* <div className="bg-gray-900">
        <HeadingHero />
      </div> */}

        <div className="min-h-screen bg-[#202020]">
          <Navbar />
          <Home />
          <About />
          <Skills/>
          <Experience />
          <Portfolio />
          <Contect />
          <Footer />
        </div>

      {/* <div className="bg-gray-900 relative min-h-screen">
        <GrideLine /> 
      </div> */}
    </Fragment>
  )
}

export default App;