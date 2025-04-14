import React from 'react';
import './style.css';

// Using the existing tags data from your TagCloudComponent
const tagsData = [
  { label: '.NET', permalink: '/docs/tags/net', count: 2 },
  { label: 'branding', permalink: '/docs/tags/branding', count: 1 },
  { label: 'communities', permalink: '/docs/tags/communities', count: 1 },
  { label: 'D3', permalink: '/docs/tags/d-3', count: 1 },
  { label: 'dataviz', permalink: '/docs/tags/dataviz', count: 2 },
  { label: 'learning', permalink: '/docs/tags/learning', count: 1 },
  { label: 'museums', permalink: '/docs/tags/museums', count: 2 },
  { label: 'peace', permalink: '/docs/tags/peace', count: 1 },
  { label: 'WordPress', permalink: '/docs/tags/wordpress', count: 1 }
];

export default function TopTagsComponent() {
  // Sort tags by count in descending order and take top 5
  const topTags = [...tagsData]
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
  
  return (
    <div className="top-tags-container">
      <div className="top-tags-list">
        {topTags.map((tag) => (
          <div key={tag.permalink} className="top-tag-item">
            <a 
              href={tag.permalink}
              className="top-tag-link"
              title={`View all content tagged with "${tag.label}"`}
              aria-label={`${tag.label} (${tag.count || 0} items)`}
            >
              {tag.label}
              {tag.count && <span className="tag-count">{tag.count}</span>}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}