
import './Home.css';
import Carousels from './carousels'
import Header from './Header';
import Content from './content';

import Feedhome from './feedhome';
import Footer from './footer';

function Home() {
  return (
    <div className="Home">
      <Header/>
      <Carousels/>
      <Content/>
 
      <Feedhome/>
      <Footer/>

    </div>
  );
}

export default Home;
