function Images({ images = [] }) {
  if (!images.length) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-gray-500">
        No images available
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl break-inside-avoid"
          >
            <img
              src={img}
              alt={`Tour image ${index + 1}`}
              className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
