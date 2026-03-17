export default function ResultCard({ price }) {
  if (price === null) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-indigo-100/50 shadow-inner">
        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Estimated Market Value</p>
        <h2 className="text-4xl font-extrabold text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          ${price.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}