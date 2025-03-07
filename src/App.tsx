import React, { useState } from 'react';
import { Pill, Stethoscope } from 'lucide-react';
import MedicineSearch from './components/MedicineSearch';
import DoctorSearch from './components/DoctorSearch';

function App() {
  const [activeTab, setActiveTab] = useState<'medicines' | 'doctors'>('medicines');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-blue-600">MedSearch</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
              activeTab === 'medicines'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('medicines')}
          >
            <Pill size={20} />
            Medicines
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
              activeTab === 'doctors'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('doctors')}
          >
            <Stethoscope size={20} />
            Doctors
          </button>
        </div>

        {activeTab === 'medicines' ? <MedicineSearch /> : <DoctorSearch />}
      </main>
    </div>
  );
}

export default App;