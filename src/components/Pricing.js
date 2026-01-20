function Pricing({ pricing }) {
  if (!pricing) return null;

  return (
    <div className="bg-white rounded-2xl  border-gray-200 p-8 space-y-6">
      <h3 className="font-manrope font-[700] text-[26px] text-[#001917]">
        Pricing Sections
      </h3>

      {/* TABLE */}
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="px-6 py-3 text-sm font-[600] text-[#001917]">
                Category
              </th>
              <th className="px-6 py-3 text-sm font-[600] text-[#001917]">
                Price
              </th>
            </tr>
          </thead>

          <tbody>
            {pricing.rows.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="px-6 py-4 text-[#001917]">
                  {row.category}
                </td>
                <td className="px-6 py-4">
                  <span className="font-[600]">{row.price}</span>{" "}
                  <span className="text-sm text-gray-500">
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
        <div className="bg-[#FFFBEA] text-[#4B5563] text-sm p-4 rounded-xl">
          <strong>Note :</strong> {pricing.note}
        </div>
      )}
    </div>
  );
}

export default Pricing;
