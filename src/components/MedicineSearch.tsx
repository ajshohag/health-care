import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { medicines } from '../data';
import { Medicine } from '../types';

export default function MedicineSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for medicines..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-6 grid gap-6">
        {searchQuery && filteredMedicines.map(medicine => (
          <div
            key={medicine.id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedMedicine(medicine)}
          >
            <h3 className="text-xl font-semibold text-gray-900">{medicine.name}</h3>
            <p className="mt-2 text-gray-600">{medicine.description}</p>
            <p className="mt-2 text-lg font-medium text-blue-600">${medicine.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedMedicine.name}</h2>
            <p className="text-gray-600 mb-4">{selectedMedicine.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Dosage:</h3>
              <p>{selectedMedicine.dosage}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Side Effects:</h3>
              <ul className="list-disc pl-5">
                {selectedMedicine.sideEffects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </div>
            <p className="text-xl font-semibold text-blue-600">
              Price: ${selectedMedicine.price.toFixed(2)}
            </p>
            <button
              className="mt-6 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              onClick={() => setSelectedMedicine(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}