import TooltipLink from "../components/TooltipLink";
import Annotation from "../components/Annotation";

import "./Pages.css";

type Resource = {
  name: string;
  description: string;
  href: string;
}
const learning_resources: Resource[]  = [
  {
    name: "PicoCTF Primer", 
    description: `This website is like a mini-textbook put together by some CMU faculty.
    I love this site because it contains so many topics we talk about (or will talk about) in class:
    Check out 2. The Shell, 4. Programming in Python, 6. Cryptography, 10. The C Language, and 11. Binary Exploitation`,
    href: "https://primer.picoctf.org/#_introduction"
  },
  {
    name: "linuxcommand.org", 
    description: `This is how I learned the basics of the Linux command line. The "I/O Redirection", "Expansion", and "Job Control" sections are all skippable, but you'll find that everything else is very useful to know.
    Don't be intimidated by its complexity: stick with it and become a CLI pro!`,
    href: "https://linuxcommand.org/lc3_learning_the_shell.php#contents"
  },
  {
    name: "Crash Course Computer Science",
    description: `Personally, I struggle to find time to sit down and read through most hacking webtexts. This Crash Course playlist covers the basics of computer engineering in a much-more-engaging video format.
    
    Videos 3-9 are the best part of the series. If that sounds like a lot, at least check out their videos on RAM (#7) and the CPU (#8).`,
    href: "https://www.youtube.com/watch?v=LN0ucKNX0hc&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&index=3"
  },
  {
    name: "cryptohack.org",
    description: `If you want to learn how AES and RSA cryptography *really* works, complete the first parts of the "Symmetric Cryptography" and "Public Key Cryptography" courses. If I rememver correctly, the AES course has you actually implement your own AES algorithm, which is pretty neat.`,
    href: "https://cryptohack.org/courses/"
  }
];
const practice_resources: Resource[] = [
  {
    name: "PicoCTF",
    description: `Bite-sized challenges`,
    href: "https://play.picoctf.org/practice"
  },
  {
    name: "HackTheBox",
    description: `More difficult. Do not touch this yet.`,
    href: "https://app.hackthebox.com/home"
  },
  {
    name: "Pwn.college",
    description: `---> If you're looking to do practice outside of class, use Pwn.college. <---
    Their content is nicely structured and well-explained.`,
    href: "https://pwn.college/linux-luminarium/"
  }
];

export default function Resources() {
  return (
    <>
      <div className="page-content subpage-left-align">
        <h1>Resources</h1>

        <div className="margin-bottom">
          <h2>The GitHub Codespace</h2>
          <p>
            GitHub codespaces are basically a cloud computer running VSCode for you.
            You can create a Cyber Cats codespace with <TooltipLink href="https://github.com/codespaces/new?repo=scepterb/cyber-cats-codespace" tooltip="github.com" target="_blank">this link</TooltipLink>.
            To do so, you must create a <Annotation note="Github is a website allowing programmers to store their projects in things called 'repositories' so that others can collaborate">GitHub account.</Annotation>
          </p>
          <p>
            Bookmark your new Cyber Cats codespace: we'll do all our hacking work in here because of our school wi-fi's firewall.
            The Cyber Cats codespace comes with some pre-installed tools, including
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

        <div className="margin-bottom">
          <h2 className="typing">Learning More about Hacking</h2>
          <p>
            It's difficult to squeeze all these computer concepts in your head in just 45-minutes-worth of formation time. 
            That's why I've compiled a list of resources that recap topics from our meetings + go more in-depth.
            Whether you're confused or just curious about a particular subject, hopefully this helps you:
          </p>
          <div className="table">
            {learning_resources.map((res, index) => (
              <div key={index} className="table-resource">
                <div className="table-resource-name"><a href={res.href}>{res.name}</a></div>
                <div className="table-resource-desc">{res.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="margin-bottom">
          <h2 className="typing">Practicing Hacking</h2>
          <p>
            Similarly, we don't meet often enough to really grow those hacking muscles.
            Believe me: it helps to delve into some practice problems from time to time. It's also kinda fun, too:
          </p>
          <div className="table">
            {practice_resources.map((res, index) => (
              <div key={index} className="table-resource">
                <div className="table-resource-name"><a href={res.href}>{res.name}</a></div>
                <div className="table-resource-desc">{res.description}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </>
  );
}