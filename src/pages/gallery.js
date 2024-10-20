import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import { MastodonGallery } from "@site/src/components/MastodonGallery";

export default function Hello() {
  return (
    <Layout
      title="My Gallery"
      description="paintings, sketches, drawings, doodles"
    >
      <MastodonGallery />
    </Layout>
  );
}