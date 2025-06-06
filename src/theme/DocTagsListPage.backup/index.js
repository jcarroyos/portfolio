import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import TagCloud from '@theme/TagCloud';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';

function DocTagsListPageMetadata() {
  return (
    <>
      <PageMetadata title="Tags" />
      <SearchMetadata tag="doc_tags_list" />
    </>
  );
}

function DocTagsListPageContent({tags}) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagsListPage)}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--10 col--offset-1">
            <header>
              <Heading as="h1">Topics & Tech by Tags</Heading>
            </header>
            <TagCloud tags={tags} />
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}

export default function DocTagsListPage(props) {
  return (
    <>
      <DocTagsListPageMetadata />
      <DocTagsListPageContent {...props} />
    </>
  );
}
