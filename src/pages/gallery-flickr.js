import Layout from "@theme/Layout";
import FlickrGalleryComponent from "@site/src/components/FlickrGallery";

export default function FlickrGalleryPage() {
  return (
    <Layout
      title="Artifacts collection"
      description="A curated archive of finished works — each piece available for purchase."
    >
            <div style={{ padding: '20px' }}>
        <p>
        A curated archive of finished works — each piece available.
        </p>
        <FlickrGalleryComponent />
      </div>
      
    </Layout>
  );
}