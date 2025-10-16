import Announcement from "../components/Announcement";
import TooltipLink from "../components/TooltipLink";
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
      <p>
        This website is intended to provide info about this club. 
        You can embed <TooltipLink href="https://play.picoctf.org/playlists/18?m=148" tooltip="play.picoctf.org">custom links</TooltipLink> in these paragraphs.
      </p>
      
    </div>
  );

}