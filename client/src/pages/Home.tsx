import Announcement from "../components/Announcement";
// import TooltipLink from "../components/TooltipLink";
import { Link } from "react-router-dom";
import Divider from "../components/Divider";

import "./Pages.css";


export default function Home() {

  return (
    <div className="page-content">
      <div className="page-title">
        <h1 className="typing">Hacking @ SIHS </h1>
        <h3 className="narrow-content">We are a cybersecurity and computer engineering club from Saint Ignatius High School.</h3>
      </div>
      <Divider />
      {<Announcement></Announcement>}
      <h3>CURIOUS ABOUT JOINING?</h3>
      <p>
        Please follow the instructions in the <Link to="/notes">Week 0 note</Link> to be ready for your first meeting.<br/>
        We meet during Monday formation in <strong>LH323</strong>. I talk more about what we do in <Link to="/about">/about</Link>.
      </p>
      
    </div>
  );

}