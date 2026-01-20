function Terms({ terms = [] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      
      <h3 className="font-manrope font-[700] text-[26px] text-[#001917] mb-6">
        Terms & Conditions
      </h3>

      <ul className="space-y-4 list-disc pl-5">
        {terms.map((item, index) => (
          <li
            key={index}
            className="font-manrope font-[400] text-[16px] text-[#6C7278] leading-relaxed"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Terms;
