import Layout from "@theme/Layout";
import MastodonGallery from "@site/src/components/MastodonGallery";

export default function Gallery() {
  return (
    <Layout
      title="Work in progress"
      description="A creative feed of ongoing work: sketches, ideas, and work-in-progress updates."
    >
            <div style={{ padding: '20px' }}>
            <div className="inner-container" style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <h1 className="inner-titles">Work in progress</h1>
        <p>
          A creative feed of ongoing work: sketches, ideas, and work-in-progress updates.
        </p>
        </div>
        <MastodonGallery />
      </div>
    </Layout>
  );
}