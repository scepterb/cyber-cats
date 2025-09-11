// import React from "react";

export default function Weeks() {
  const items = [
    { id: "w1-notes",  title: "Week 1 Notes",  url: "/notes/week1.pdf" },
    { id: "w1-slides", title: "Week 1 Slides", url: "https://example.com/slides1" },
  ];

  return (
    <main style={{ padding: 24 }}>
      <h1>Links</h1>
      <ul>
        {items.map(i => (
          <li key={i.id}>
            <a href={i.url} target="_blank" rel="noreferrer">{i.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}