import type { ReactNode } from "react";
import "./css/WeekNote.css";

type WeekNoteProps = {
  color: string;
  week: string;
  slidesUrl?: string;
  notesUrl?: string;
  challenge?: ReactNode;     /* in order to import a Tooltip link */
  homework?: ReactNode;    
  children: ReactNode;
};

export default function WeekNote({color, week, slidesUrl, challenge, notesUrl, homework, children}: WeekNoteProps) {
  return (
    <div className="week-note" style={{ background: `${color}`}}>

      <div className="week-note-header">
        <h2 className="week-note-title">Week {week}</h2>
        <div className="week-note-links">
          <a href={notesUrl} rel="noopener noreferrer" download>
            Notes
          </a>
          <a href={slidesUrl} target="_blank" rel="noopener noreferrer">
            Slides
          </a>
        </div>
      </div>

      <div className="week-note-body">
        <p>{children}</p>
        {challenge && (
          <p><strong>This Week's Challenge:</strong> {challenge}</p>
        )}
        {homework && (
          <p><strong>Optional Homework:</strong> {homework}</p>
        )}
      </div>
    </div>
  );
}
