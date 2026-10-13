export interface LocationItem {
  id: string;
  name: string;
  category: string;
  distance: string;
  travelTime: string;
  description: string;
}

const locationData: LocationItem[] = [
  {
    id: "loc-rajahmundry",
    name: "Rajahmundry (Rajamahendravaram)",
    category: "City & Airport",
    distance: "35 km",
    travelTime: "~40 mins via NH16",
    description: "Major commercial, educational, and medical hub with airport and rail terminus."
  },
  {
    id: "loc-kakinada",
    name: "Kakinada Port & City",
    category: "Industrial & Port",
    distance: "45 km",
    travelTime: "~50 mins",
    description: "Industrial corridor, deep-water port, SEZ, and IT employment center."
  },
  {
    id: "loc-samalkot",
    name: "Samalkot Railway Junction",
    category: "Transit",
    distance: "18 km",
    travelTime: "~20 mins",
    description: "Major railway junction connecting Vijayawada, Visakhapatnam, and Hyderabad."
  },
  {
    id: "loc-nh16",
    name: "National Highway 16 (NH16)",
    category: "Highway",
    distance: "2 km",
    travelTime: "~5 mins",
    description: "Golden Quadrilateral highway artery connecting Chennai to Kolkata."
  },
  {
    id: "loc-schools",
    name: "Reputed Schools & Colleges",
    category: "Education",
    distance: "3 - 7 km",
    travelTime: "5 - 10 mins",
    description: "Established corporate schools, junior colleges, and degree institutions in Jaggampeta."
  },
  {
    id: "loc-hospitals",
    name: "Multi-Specialty Hospitals",
    category: "Healthcare",
    distance: "4 - 8 km",
    travelTime: "10 mins",
    description: "24/7 emergency healthcare facilities and pharmacies in the vicinity."
  }
];

export default locationData;
