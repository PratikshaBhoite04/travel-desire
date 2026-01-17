function Highlights() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Trip Highlights
      </h3>

      <ul className="space-y-2 text-sm text-gray-600">
        <li>✔ Kumbhalgarh Fort</li>
        <li>✔ Chittorgarh Fort</li>
        <li>✔ City Palace, Udaipur</li>
        <li>✔ Ranthambore National Park</li>
      </ul>

      <h3 className="text-lg font-semibold mt-8 mb-4">
        Must-Try Experiences
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#001917] text-white p-4 rounded-xl">
          Boating at Lake Pichola
        </div>
        <div className="bg-[#001917] text-white p-4 rounded-xl">
          Local Rajasthani Cuisine
        </div>
      </div>
    </div>
  );
}

export default Highlights;
