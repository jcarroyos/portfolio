import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import TagCloud from '@theme/TagCloud';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';

function DocTagsListPageMetadata({title}) {
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tags_list" />
    </>
  );
}

function DocTagsListPageContent({tags, title}) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagsListPage)}>
      <div className="container margin-vert--lg">
        <div className="row">
          {/* Sidebar placeholder removed to fix the error */}
          <main className="col col--10 col--offset-1">
            <header>
              <Heading as="h1">{title}</Heading>
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
  return (
    <>
      <DocTagsListPageMetadata {...props} title={title} />
      <DocTagsListPageContent {...props} title={title} />
    </>
  );
}
