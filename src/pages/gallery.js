import Layout from "@theme/Layout";
import MastodonGallery from "@site/src/components/MastodonGallery";

export default function Gallery() {
  return (
    <Layout
      title="Work in progress"
      description="A creative feed of ongoing work: sketches, ideas, and work-in-progress updates shared on my Mastodon account."
    >
            <div style={{ padding: '20px' }}>
        <p>
          A creative feed of ongoing work: sketches, ideas, and work-in-progress updates shared on my Mastodon account.
        </p>
        <MastodonGallery />
      </div>
    </Layout>
  );
}