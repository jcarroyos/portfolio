import Layout from "@theme/Layout";
import FlickrGalleryComponent from "@site/src/components/FlickrGallery";

export default function FlickrGalleryPage() {
  return (
    <Layout
      title="A Curated collection"
      description="A curated collection of my finished work, showcasing clean, high-quality records of each project on Flickr."
    >
            <div style={{ padding: '20px' }}>
        <p>
        A curated collection of my finished work, showcasing clean, high-quality records of each project on Flickr.
        </p>
        <FlickrGalleryComponent />
      </div>
      
    </Layout>
  );
}