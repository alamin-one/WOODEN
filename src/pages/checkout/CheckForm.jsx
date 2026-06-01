import { useEffect, useState } from 'react';

const CheckForm = ({ setAddress }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    zip: '',
    description: '',
  });

  useEffect(() => {
    setAddress(form);
  }, [form, setAddress]);

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg outline-none transition-colors focus:border-teal-700 placeholder:text-gray-400';

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-7">
      {/*   */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className={inputClass}
          />
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:border-teal-700 transition-colors">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+880 ..."
              className="flex-1 px-3 py-2.5 text-sm text-gray-900 bg-white outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/*   */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            name="zip"
            value={form.zip}
            onChange={handleChange}
            placeholder="zip code"
            className={inputClass}
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1.5">
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter a description..."
          rows={3}
          className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg outline-none resize-y transition-colors focus:border-teal-700 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default CheckForm;
