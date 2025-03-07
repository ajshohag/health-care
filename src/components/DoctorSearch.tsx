import React, { useState } from 'react';
import { Search, MapPin, User, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { doctors } from '../data';
import { Doctor, SearchFilters } from '../types';

export default function DoctorSearch() {
  const [filters, setFilters] = useState<SearchFilters>({ query: '' });
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesQuery = doctor.name.toLowerCase().includes(filters.query.toLowerCase());
    const matchesLocation = !filters.location || doctor.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesSpecialization = !filters.specialization || 
      doctor.specialization.toLowerCase().includes(filters.specialization.toLowerCase());
    return matchesQuery && matchesLocation && matchesSpecialization;
  });

  const handleBookAppointment = () => {
    if (selectedDoctor && selectedSlot) {
      alert(`Appointment booked with ${selectedDoctor.name} for ${format(new Date(selectedSlot), 'PPP p')}`);
      setSelectedDoctor(null);
      setSelectedSlot(null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search doctors by name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Filter by location..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.location || ''}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Filter by specialization..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.specialization || ''}
              onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredDoctors.map(doctor => (
          <div
            key={doctor.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialization}</p>
                <p className="text-gray-600 flex items-center gap-1">
                  <MapPin size={16} /> {doctor.location}
                </p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <Calendar size={16} />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">Book Appointment with {selectedDoctor.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {selectedDoctor.availableSlots.map(slot => (
                <button
                  key={slot}
                  className={`p-3 rounded-lg border ${
                    selectedSlot === slot
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-gray-300 hover:border-blue-500'
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {format(new Date(slot), 'PPP p')}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
                onClick={handleBookAppointment}
                disabled={!selectedSlot}
              >
                Confirm Booking
              </button>
              <button
                className="flex-1 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                onClick={() => {
                  setSelectedDoctor(null);
                  setSelectedSlot(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}