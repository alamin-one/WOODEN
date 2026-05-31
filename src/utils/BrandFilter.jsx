import { useState } from 'react';

const BrandFilter = ({ label = 'Clear', isFilterBrandFN }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none w-fit">
      <input
        type="checkbox"
        checked={true}
        onChange={() => {
          (setChecked(prev => !prev), isFilterBrandFN(label, checked));
        }}
        className="hidden"
      />
      {/* Custom box */}
      <div
        className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-all duration-200 shrink-0
          ${checked ? 'bg-deep-aqua border-deep-aqua' : 'bg-white border-gray-300'}`}
      >
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          className={`transition-opacity duration-150 ${checked ? 'opacity-100' : 'opacity-0'}`}
        >
          <path
            d="M1 5l3.5 3.5L11 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-sm text-gray-500">{label}</span>
    </label>
  );
};

export default BrandFilter;
