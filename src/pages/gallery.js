import Layout from "@theme/Layout";
import MastodonGallery from "@site/src/components/MastodonGallery";

export default function Gallery() {
  return (
    <Layout
      title="My Gallery"
      description="paintings, sketches, drawings, doodles"
    >
      <MastodonGallery />
    </Layout>
  );
}