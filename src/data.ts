import { Doctor, Medicine } from './types';

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Amoxicillin',
    description: 'Antibiotic used to treat bacterial infections',
    price: 15.99,
    sideEffects: ['Nausea', 'Diarrhea', 'Rash', 'Vomiting'],
    dosage: '250-500mg every 8 hours for adults'
  },
  {
    id: '2',
    name: 'Lisinopril',
    description: 'ACE inhibitor used to treat high blood pressure',
    price: 12.99,
    sideEffects: ['Dizziness', 'Cough', 'Headache'],
    dosage: '10mg once daily'
  },
  {
    id: '3',
    name: 'Metformin',
    description: 'Used to treat type 2 diabetes',
    price: 8.99,
    sideEffects: ['Stomach upset', 'Diarrhea', 'Loss of appetite'],
    dosage: '500mg twice daily with meals'
  }
];

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    availableSlots: ['2024-03-20 09:00', '2024-03-20 10:00', '2024-03-21 14:00']
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Pediatrician',
    location: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
    availableSlots: ['2024-03-20 11:00', '2024-03-21 09:00', '2024-03-21 10:00']
  },
  {
    id: '3',
    name: 'Dr. Emily Martinez',
    specialization: 'Dermatologist',
    location: 'Chicago',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    availableSlots: ['2024-03-20 15:00', '2024-03-21 11:00', '2024-03-22 09:00']
  }
];