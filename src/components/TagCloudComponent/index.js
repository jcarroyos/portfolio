import React, { useEffect, useState } from 'react';
import TagCloud from '../../theme/TagCloud';
import { useLocation } from '@docusaurus/router';

// Import the real tags from the tags data file
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

export default function TagCloudComponent() {
  // We're using the predefined tags from the docs folder
  return (
    <div className="tag-cloud-container">
      <TagCloud tags={tagsData} />
    </div>
  );
}