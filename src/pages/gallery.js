import React from "react";
import Layout from "@theme/Layout";
import Gallery from "@site/src/components/GridGallery";

export default function Hello() {
  return (
    <Layout
      title="My Gallery"
      description="paintings, sketches, drawings, doodles"
    >
            <iframe height="600" style="width: 100%;" scrolling="no" title="Mastodon embed timeline (open to see it working)" src="https://codepen.io/jcarroyos/embed/MWdaOxv?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jcarroyos/pen/MWdaOxv">
  Mastodon embed timeline (open to see it working)</a> by Juan Carlos Arroyo (<a href="https://codepen.io/jcarroyos">@jcarroyos</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
      <Gallery />
    </Layout>
  );
}
