
import About from '../layouts/About'
import Banner from '../layouts/Banner'
import Footer from '../layouts/Footer';
import Header from '../layouts/Header'
import Skills from '../layouts/Skills';
import Ourportfolio from "../layouts/Ourportfolio";

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Ourportfolio/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home
