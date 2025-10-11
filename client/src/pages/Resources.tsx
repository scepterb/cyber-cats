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
          Those who can't download VSCode or access the terminal on their personal device should create a GitHub codespace with <TooltipLink href="https://github.com/codespaces/new?repo=scepterb/cyber-cats-codespace" tooltip="github.com" target="_blank">this link</TooltipLink>.
          To do so, you must create a <Annotation note="Github is a website allowing programmers to store their projects in things called 'repositories' so that others can collaborate">GitHub account.</Annotation> 
          <em>GitHub codespaces</em> are basically a cloud computer running VSCode for you. Bookmark this page: we'll use it to write code and connect to remote computers.
        </p>
        <p>
          This particular codespace will automatically install certain tools for you, including 
        </p>
        <ul>
          <li>nmap,</li>
          <li>the Python language + <TooltipLink href="https://pypi.org/project/pip/" tooltip="pip on pypi.org" target="_blank">pip</TooltipLink>,</li>
          <li><TooltipLink href="https://hashcat.net/wiki/doku.php?id=hashcat" tooltip="hashcat.net" target="_blank">hashcat</TooltipLink>,</li>
          <li><TooltipLink href="https://man.openbsd.org/nc.1" tooltip="man.openbsd.org" target="_blank">netcat-openbsd</TooltipLink>,</li>
          <li>smbclient,</li>
          <li>ncftp,</li>
          <li>gobuster,</li>
          <li>and the Python VSCode extension</li>
        </ul>
        <p>
          Please note that, for a free GitHub account, codespace usage is limited to 60 hours per month.
        </p>
      </div>
    </>
  );
}