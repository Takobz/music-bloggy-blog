import React, { type ReactNode } from 'react';

interface LyricsTileProps {
  /** The full Genius lyrics page URL */
  href: string;
  /** The lyrics snippet (can include <br /> tags) */
  children: ReactNode;
}

export default function LyricsTile({ href, children }: LyricsTileProps) {
  return (
    <blockquote className="lyrics-highlight">
      <div className="lyrics-text">
        {children}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="genius-link"
      >
        View on Genius ↗
      </a>
    </blockquote>
  );
}