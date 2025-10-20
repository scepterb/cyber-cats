import "./Pages.css";
import memeCyberCats from "../assets/oh-yeah.png"
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="page-content subpage-left-align">
        <h1>About</h1>
        <div className="section-split margin-bottom">
          <div className="left">
            <h2 className="center-text color margin-bottom">"You are going to have real fun here"</h2>
            <p className="center-text">... that's a quote from PicoCTF, an online hacking community. It continues:</p>
            <p className="center-text color">"You will gain the ability to do impressive things in life using a computer. It will be like acquiring a superpower to be able to do things that ordinary people cannot do." </p>
          </div>
          <img src={memeCyberCats} alt="fun cyber cats image" className="right hide-on-mobile"/>
        </div>
        <p className="margin-bottom">
          Cyber Cats is a club that tries to teach those super powers.
          That might sound romantic, but you will soon realize that just the mere fact of making your computer do something awesome and getting a secret flag generates emotions and adrenaline.
          Join us on this journey to harness the mind-numbing power of computers.
        </p>
        <h2>More specifically...</h2>
        <p>
          We meet <strong className="color">every Monday, during formation, in LH323</strong> to learn a new computer concept.
          In those meetings, we'll also get our hands dirty with a hacking challenge or two. <strong className="color">Tuesdays after school</strong>, we do a bit more practice and review. <br /> <br />
          
          All of this builds up to us competing in <Link to="https://ctf101.org/intro/what-is-a-ctf/">capture-the-flags</Link>, which are timed hacking competitions (that look great on college resumes!)
        </p>
      </div>
    </>
  );
}