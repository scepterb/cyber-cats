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
        slidesUrl="docs.google.com/presentation/d/1fCPHNNWUVKwPYNQxonIsIsty3eXWMmd2CEUM702oBqY/edit?slide=id.g37d90c9164f_0_58#slide=id.g37d90c9164f_0_58" 
        notesUrl="../notes/Week-1.md"
        homework={<TooltipLink tooltip="play.picoctf.org" href="https://play.picoctf.org/playlists/18?m=153">PicoCTF "Wave a Flag"</TooltipLink>}
        color="#B6C5DF30"
      >
        Today's session served as an introduction to the concept of hacking.
        In the future, any newcomers should sign up to <TooltipLink href="picoctf.org" tooltip="picoctf.org">PicoCTF</TooltipLink> and download <TooltipLink href="https://code.visualstudio.com/download" tooltip="visualstudio.com">VSCode</TooltipLink>, a code editor.
      </WeekNote>
    </div>
  );
}