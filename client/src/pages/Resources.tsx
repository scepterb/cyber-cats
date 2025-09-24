import TooltipLink from "../components/TooltipLink";
import Annotation from "../components/Annotation";
import "./Pages.css";

export default function Resources() {
  return (
    <>
      <div className="page-content subpage-left-align">
        <h1>Resources</h1>

        <h2>The GitHub Codespace</h2>
        <p>
          Those who can't download VSCode or access the terminal on their personal device should create a GitHub codespace with <TooltipLink href="https://github.com/codespaces/new?repo=scepterb/hack-cats-codespace" tooltip="github.com">this link</TooltipLink>.
          To do so, you must create a <Annotation note="Github is a website allowing programmers to store their projects in things called 'repositories' so that others can collaborate">GitHub account.</Annotation> 
          GitHub codespaces are basically a cloud computer running VSCode for you. We'll use it to write code and connect to remote computers.
        </p>
        <p>
          This particular codespace will automatically install certain tools for you, including 
          nmap, 
          the Python language + <TooltipLink href="https://pypi.org/project/pip/" tooltip="pip on pypi.org">pip</TooltipLink>, 
          <TooltipLink href="https://hashcat.net/wiki/doku.php?id=hashcat" tooltip="hashcat.net">hashcat</TooltipLink>, 
          <TooltipLink href="https://man.openbsd.org/nc.1" tooltip="man.openbsd.org">netcat-openbsd</TooltipLink>, 
          smbclient, 
          ncftp, 
          gobuster, 
          and the Python VSCode extension.
        </p>
      </div>
    </>
  );
}