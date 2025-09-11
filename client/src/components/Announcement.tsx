import './Announcement.css';

type AnnouncementProps = {
  children: React.ReactNode;
}

export default function Announcement({ children } : AnnouncementProps) {
  return (
    <div className="announcement">
      {children}
    </div>
  );
}