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
        In the future, any newcomers should sign up to <TooltipLink href="picoctf.org" tooltip="picoctf.org">PicoCTF</TooltipLink> and download <TooltipLink href="https://code.visualstudio.com/download" tooltip="visualstudio.com">VSCode</TooltipLink>, a code editor.
        Alternatively, bookmark the <TooltipLink href="https://vscode.dev/" tooltip="vscode.dev">web version of VSCode</TooltipLink> if you can't download it (which will be the case if you use a school computer).
      </WeekNote>
    </div>
  );
}