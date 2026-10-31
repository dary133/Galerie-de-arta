
const CLOTHES_VIDEOS = [
  {
    id: 1,
    title: "Hand-Painted T-Shirt Panther",
    video: "/videos/panther.mp4"
  },
  {
    id: 2,
    title: "Hand-Painted T-Shirt Pink Panther",
    video: "/videos/pink_panther.mp4"
  }
];

export default function ClothesGallery() {
  return (
    <section id="clothes" className="panel">
      <h2>Painting on Clothes</h2>

      <p className="clothes-description">
        Discover wearable art through hand-painted
        clothing and creative designs.
      </p>

      <div className="clothes-video-list">
        {CLOTHES_VIDEOS.map((item) => (
          <div className="clothes-video-card" key={item.id}>
            <video
              controls
              playsInline
              preload="metadata"
            >
              <source
                src={item.video}
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
