import{ Link } from 'react-router-dom';
import WeekNote from "../components/WeekNote";
import TooltipLink from "../components/TooltipLink";

import "./Pages.css";

export default function Notes() {
  return (
    <div className="page-content">
      <div className="page-title">
        <h1>Notes</h1>
      </div>
      <WeekNote 
        week="0" 
        slidesUrl="https://docs.google.com/presentation/d/1fCPHNNWUVKwPYNQxonIsIsty3eXWMmd2CEUM702oBqY/" 
        notesUrl="./notes/Week-0.md"
        challenge={<TooltipLink href="https://play.picoctf.org/playlists/18?m=148" tooltip="play.picoctf.org">"What's A Net Cat?"</TooltipLink>}
        homework={<TooltipLink tooltip="play.picoctf.org" href="https://play.picoctf.org/playlists/18?m=153">"Wave a Flag"</TooltipLink>}
        color="#B6C5DF30"
      >
        Today's session served as an introduction to the concept of hacking.
        In the future, any newcomers should sign up to <TooltipLink href="https://picoctf.org" tooltip="picoctf.org">PicoCTF</TooltipLink> and go to the <Link to="/resources">/resources page</Link> to create a "GitHub codespace", which will be your online code editor.
      </WeekNote>
      <WeekNote 
        week="1" 
        slidesUrl="https://docs.google.com/presentation/d/1tMTvIWddDbPhZPW6l1hFTx5SDFxbF6IFe-pWiDgurOk/edit?slide=id.g2553b51d4ff_0_89#slide=id.g2553b51d4ff_0_89" 
        notesUrl="./notes/Week-1.md"
        challenge={<TooltipLink tooltip="overthewire.org" href="https://overthewire.org/wargames/bandit/">Bandit Wargame</TooltipLink>}
        homework={<TooltipLink tooltip='play.picoctf.org' href='https://play.picoctf.org/playlists/18?m=154'>"Tab, Tab, Attack"</TooltipLink>}
        color="#b18acd5f"
      >
        This week, we learned what operating systems are and the importance of understanding Linux basics.
        We also reviewed other resources for learning and reviewing hacking skills (see the <Link to="/resources">/resources page</Link>).
      </WeekNote>
      <WeekNote
        week='2'
        slidesUrl=''
        notesUrl='./notes/Week-2.md'
        challenge={<TooltipLink tooltip='play.picoctf.org' href='https://play.picoctf.org/practice/challenge/414?category=5&page=1'>"Endianness"</TooltipLink>}
        homework={<TooltipLink tooltip='pwn.college' href='https://pwn.college/linux-luminarium/hello/'>Pwn.college "Hello, Hackers"</TooltipLink>}
        color="#cf72b65f">
          This week, we learned binary and hex represenation. We learned about bits and bytes, endianness, and encodings such as ASCII.<br/>
          The challenge is short this week, so why not try out that homework? It's good review.
        </WeekNote>
    </div>
  );
}