import React, { useState } from 'react';
import { Search, Tag, Grid, List, Info } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Sitara Platinum Fully Synthetic 5W-30',
    category: 'Engine Oils',
    short: 'Fully synthetic oil for modern petrol & diesel engines — long drain intervals.',
    img: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b0?q=80&w=800&auto=format&fit=crop',
    specs: ['API SN', '5W-30', '1L / 4L / 20L'],
  },
  {
    id: 'p2',
    name: 'Sitara Gold 10W-40 Semi-Synthetic',
    category: 'Engine Oils',
    short: 'Balanced protection and value — great for mixed urban & highway use.',
    img: 'https://images.unsplash.com/photo-1598477380864-944fa5b8e23e?q=80&w=800&auto=format&fit=crop',
    specs: ['API SL', '10W-40', '1L / 4L'],
  },
  {
    id: 'p3',
    name: 'Sitara Diesel Power 15W-40',
    category: 'Engine Oils',
    short: 'Heavy-duty diesel oil for trucks, fleets, and commercial vehicles.',
    img: 'https://images.unsplash.com/photo-1607863680281-cd81a2b29317?q=80&w=800&auto=format&fit=crop',
    specs: ['CI-4', '15W-40', '20L / 205L'],
  },
  {
    id: 'p4',
    name: 'Sitara Industrial Gear Oil 80W-90',
    category: 'Industrial',
    short: 'EP gear oil built for heavy gears and transmissions.',
    img: 'https://cdn.pixabay.com/photo/2017/07/31/11/21/machine-2552660_1280.jpg',
    specs: ['GL-5', '80W-90', '20L'],
  },
  {
    id: 'p5',
    name: 'Engine Treatment Additive',
    category: 'Additives',
    short: 'Reduce noise, prevent deposits and restore compression.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    specs: ['1x bottle', 'Universal'],
  },
  {
    id: 'p6',
    name: 'Reefer Refrigeration Oil',
    category: 'Industrial',
    short: 'Specialty oil for refrigerated transport compressors and systems.',
    img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=800&auto=format&fit=crop',
    specs: ['ISO VG 46', '1L / 20L'],
  },
];

export default function SitaraAutoService() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [view, setView] = useState('grid');
  const [selected, setSelected] = useState(null);

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category;
    const matchesQuery =
      query.trim() === '' ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.short.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Section */}
        <div className="text-center mb-14">
          <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
            SITARA AUTO SERVICE
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            Reliable Car Care, Trusted by Drivers
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience professional maintenance, quick repairs, and genuine care.
            Sitara Auto Service keeps your vehicle running smoothly with expert
            technicians, transparent pricing, and trusted quality.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-2xl font-extrabold">Product Catalog</h1>
            <p className="text-sm text-gray-600">Browse Sitara’s full range of automotive & industrial lubricants.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-white rounded-full border px-3 py-2 shadow-sm w-full sm:w-auto">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="outline-none text-sm flex-1"
              />
            </div>

            <div className="flex items-center gap-2 bg-white rounded-full border px-3 py-2 shadow-sm">
              <Tag className="w-4 h-4 text-gray-500" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-white text-sm outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 border rounded-full px-2 py-2 bg-white shadow-sm">
              <button onClick={() => setView('grid')} className={`p-1 rounded ${view === 'grid' ? 'bg-gray-100' : ''}`}>
                <Grid className="w-4 h-4" />
              </button>
              <button onClick={() => setView('list')} className={`p-1 rounded ${view === 'list' ? 'bg-gray-100' : ''}`}>
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Catalog */}
        <div className="grid lg:grid-cols-4 gap-6">
          <aside className="hidden lg:block bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-semibold mb-3">Filters</h4>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 mb-2">Category</div>
                <div className="flex flex-col gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`text-left p-2 rounded transition ${
                        category === c
                          ? 'bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {filtered.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No products found. Try a different search.</div>
            ) : (
              <div
                className={
                  view === 'grid'
                    ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                {filtered.map((p) => (
                  <div
                    key={p.id}
                    className={`bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition ${
                      view === 'list' ? 'flex items-center gap-4 p-4' : ''
                    }`}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className={`w-full h-44 object-cover ${
                        view === 'list' ? 'w-44 h-32 rounded-md' : ''
                      }`}
                    />
                    <div className={`p-4 ${view === 'list' ? 'flex-1' : ''}`}>
                      <h3 className="font-semibold text-gray-800">{p.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{p.category}</p>
                      <p className="text-sm text-gray-600 mt-3">{p.short}</p>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                          {p.specs.map((s) => (
                            <span key={s} className="px-2 py-1 rounded-full bg-gray-100">
                              {s}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => setSelected(p)}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] text-white text-sm"
                        >
                          <Info className="w-4 h-4" /> Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img src={selected.img} alt={selected.name} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{selected.name}</h3>
                  <p className="text-sm text-gray-600 mt-3">{selected.short}</p>

                  <div className="mt-4">
                    <div className="text-sm text-gray-500 mb-2">Specifications</div>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      {selected.specs.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] text-white font-semibold">
                      Contact Sales
                    </button>
                    <button
                      onClick={() => setSelected(null)}
                      className="px-5 py-2 rounded-full border"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-12 text-center text-sm text-gray-500">
          © Sitara — Product Catalog
        </footer>
      </div>
    </div>
  );
}
