import './Announcement.css';

type AnnouncementProps = {
  children?: React.ReactNode;
}

export default function Announcement({ children } : AnnouncementProps) {
  if (!children) return null;

  return (
    <div className="announcement">
      <h2>{children}</h2>
    </div>
  );
}