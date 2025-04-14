import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Tag({permalink, label, count, description}) {
  return (
    <Link
      href={permalink}
      title={description || `View all content tagged with "${label}"`}
      className={clsx(
        styles.tag,
        count ? styles.tagWithCount : styles.tagRegular,
      )}
      aria-label={`${label}${count ? ` (${count} items)` : ''}`}>
      {label}
      {count && <span>{count}</span>}
    </Link>
  );
}
