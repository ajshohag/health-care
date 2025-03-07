export interface Medicine {
  id: string;
  name: string;
  description: string;
  price: number;
  sideEffects: string[];
  dosage: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  location: string;
  image: string;
  availableSlots: string[];
}

export interface SearchFilters {
  query: string;
  location?: string;
  specialization?: string;
}