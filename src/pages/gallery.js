import React from "react";
import Layout from "@theme/Layout";
import Gallery from "@site/src/components/GridGallery";

export default function Hello() {
  return (
    <Layout
      title="My Gallery"
      description="paintings, sketches, drawings, doodles"
    >
      <Gallery />
    </Layout>
  );
}
