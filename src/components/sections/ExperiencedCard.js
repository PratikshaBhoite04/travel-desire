function ExperiencedCard({ item }) {
  if (!item) return null;

  return (
    <div
      className="
        flex-shrink-0
        w-[85vw] sm:w-[420px]
        h-[320px]
        rounded-2xl
        overflow-hidden
        relative
        group
      "
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-end p-6">
        <div className="text-white">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm mt-2 text-white/90 line-clamp-3">
            {item.desc}
          </p>

          <button
            className="
              mt-4 inline-flex items-center gap-2
              px-5 py-2 rounded-xl
              border border-white/40
              text-sm
              group-hover:border-[#D5FB93]
              group-hover:text-[#D5FB93]
              transition
              relative z-10
            "
          >
            View Packages →
          </button>
        </div>
      </div>

      <div
       className="
    absolute bottom-0 left-0 w-full
    h-24
    bg-gradient-to-t
    from-black
    via-black/95
    to-transparent
    pointer-events-none
  "
      />
    </div>
  );
}

export default ExperiencedCard;

