import type { ReactNode } from "react";
import "./WeekNote.css";

type WeekNoteProps = {
  color: string;
  week: string;
  slidesUrl?: string;
  notesUrl?: string;
  homework?: ReactNode;    /* in order to import a Tooltip link */
  children: ReactNode;
};

export default function WeekNote({color, week, slidesUrl, notesUrl, homework, children}: WeekNoteProps) {
  return (
    <div className="week-note" style={{ background: `${color}`}}>

      <div className="week-note-header">
        <h2 className="week-note-title">Week {week}</h2>
        <div className="week-note-links">
          <a href={slidesUrl} target="_blank" rel="noopener noreferrer">
            Slides
          </a>
          <a href={notesUrl} rel="noopener noreferrer" download>
            Notes
          </a>
        </div>
      </div>

      <div className="week-note-body">
        <p>{children}</p>
        {homework && (
          <p><strong>Optional Homework:</strong> {homework}</p>
        )}
      </div>
    </div>
  );
}
