export default function Input({ label, name, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="flex flex-col mb-5 group">
      <label className="mb-1.5 text-sm font-medium text-slate-600 group-focus-within:text-indigo-600 transition-colors">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 hover:border-slate-300"
      />
    </div>
  );
}