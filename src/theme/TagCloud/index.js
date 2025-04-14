import React from 'react';
import Tag from '@theme/Tag';
import styles from './styles.module.css';

export default function TagCloud({tags}) {
  // Find the min and max counts to normalize font sizes
  const counts = tags.map(tag => tag.count || 0);
  const minCount = Math.min(...counts.filter(count => count > 0), 1);
  const maxCount = Math.max(...counts, 1);
  
  // Function to calculate font size based on count
  const calculateFontSize = (count) => {
    // If no count provided, use the minimum size
    if (!count) return 1;
    
    // Scale from 1 to 3 based on the tag's count
    const minSize = 1;
    const maxSize = 3;
    const scale = (count - minCount) / (maxCount - minCount) || 0;
    return minSize + scale * (maxSize - minSize);
  };

  return (
    <div className={styles.tagCloud} role="navigation" aria-label="Tags cloud">
      {tags.map((tag) => (
        <div
          key={tag.permalink}
          className={styles.tagItem}
          style={{
            fontSize: `${calculateFontSize(tag.count)}rem`,
            margin: '0.5rem',
            display: 'inline-block',
            transition: 'all 0.3s ease',
          }}
        >
          <Tag
            {...tag}
            aria-label={`${tag.label} (${tag.count || 0} items)`}
          />
        </div>
      ))}
    </div>
  );
}