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
        week="1" 
        slidesUrl="https://docs.google.com/presentation/d/1fCPHNNWUVKwPYNQxonIsIsty3eXWMmd2CEUM702oBqY/" 
        notesUrl="./notes/Week-1.md"
        challenge={<TooltipLink href="https://play.picoctf.org/playlists/18?m=148" tooltip="play.picoctf.org">"What's A Net Cat?"</TooltipLink>}
        homework={<TooltipLink tooltip="play.picoctf.org" href="https://play.picoctf.org/playlists/18?m=153">"Wave a Flag"</TooltipLink>}
        color="#B6C5DF30"
      >
        Today's session served as an introduction to the concept of hacking.
        In the future, any newcomers should sign up to <TooltipLink href="https://picoctf.org" tooltip="picoctf.org">PicoCTF</TooltipLink> and download <TooltipLink href="https://code.visualstudio.com/download" tooltip="visualstudio.com">VSCode</TooltipLink>, a code editor.
        If you don't want to download VSCode, go to the <Link to="/resources">/resources page</Link> to create a <em>GitHub codespace</em> to use instead.
      </WeekNote>
      <WeekNote 
        week="2" 
        slidesUrl="https://docs.google.com/presentation/d/1fCPHNNWUVKwPYNQxonIsIsty3eXWMmd2CEUM702oBqY/" 
        notesUrl="./notes/Week-1.md"
        color="#b18acd5f"
      >
        In progress...
      </WeekNote>
    </div>
  );
}