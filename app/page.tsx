import Nav from "./component/nav";
import Services from "./component/services";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Footer from "./component/footer";
import AboutUs from "./component/aboutUs";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Home() {
  return (<div>
    <Nav/>
    <Hero/>
    <Services/>
    <AboutUs/>
    <Contact/>
    <Footer/>
  </div>
  );
}
