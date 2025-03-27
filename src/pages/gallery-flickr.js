import Layout from "@theme/Layout";
import FlickrGalleryComponent from "@site/src/components/FlickrGallery";

export default function FlickrGalleryPage() {
  return (
    <Layout
      title="Artifacts collection"
      description="A curated archive of finished works — each piece available for purchase."
    >
      <div style={{ padding: '20px' }}>
        <div className="inner-container" style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <h1 className="inner-titles">Artifacts</h1>
          <p>
          A curated archive of finished works — each piece available.
          </p>
        </div>
        <FlickrGalleryComponent />
      </div>
      
    </Layout>
  );
}