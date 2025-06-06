import React from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import TagCloud from '@theme/TagCloud';
import Heading from '@theme/Heading';

function DocTagsListPageContent({tags, title}) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagsListPage)}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--10 col--offset-1">
            <header>
              <Heading as="h1">Topics & Tech by {title}</Heading>
            </header>
            <TagCloud tags={tags} />
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}

export default function DocTagsListPage(props) {
  const title = translateTagsPageTitle();
  return <DocTagsListPageContent {...props} title={title} />;
}
