function Pricing({ pricing }) {
  if (!pricing) return null;

  return (
    <div>

      {/* HEADING — desktop only */}
      <h3 className="hidden md:block font-manrope font-[700] text-[26px] text-[#001917] mb-4">
        Pricing Sections
      </h3>

      {/* TABLE */}
      <div className="overflow-hidden rounded-xl border border-[#1212124D]">
        <table className="w-full text-left">
          <thead className="bg-[#FFFFFF]">
            <tr>
              <th className="px-4 md:px-6 py-3 text-[16px] font-manrope font-[600] text-[#001917]">
                Category
              </th>
              <th className="px-4 md:px-6 py-3  text-[16px] font-manrope font-[600] text-[#001917]">
                Price
              </th>
            </tr>
          </thead>
   <tbody>
            {pricing.rows.map((row, i) => (
              <tr key={i} className="border-t border-[#1212124D]">
                <td className="px-4 md:px-6 py-4 text-[#343434] font-[400] font-manrope text-[16px]">
                  {row.category}
                </td>
             <td className="px-4 md:px-6 py-1">
  <span className="font-[600] text-[#343434] text-[18px] block md:inline">
    {row.price}
  </span>

  <span className="text-[14px] font-manrope font-[400] text-[#343434B2] block md:inline md:ml-2">
    {row.unit}
  </span>
</td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* NOTE */}
      {pricing.note && (
        <div className="bg-[#FEFCE8] text-[#364153] text-[14px] leading-[22px] p-4 font-manrope font-[400] rounded-xl mt-4">
          <strong className="font-[600] text-[14px] font-manrope text-[#364153]">Note :</strong> {pricing.note}
        </div>
      )}
    </div>
  );
}

export default Pricing;
