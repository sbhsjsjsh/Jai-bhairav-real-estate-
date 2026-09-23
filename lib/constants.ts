export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Residential Plot' | 'Commercial Plot' | 'Agricultural';
  imageFallbackColor: string;
  isPlot: boolean;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Premium Residential Plot',
    location: 'Shivdaspura, Tonk Road, Jaipur',
    price: '₹25,00,000',
    type: 'Residential Plot',
    imageFallbackColor: 'bg-emerald-100',
    isPlot: true,
  },
  {
    id: '2',
    title: 'Vatika Township Plot',
    location: 'Vatika, Tonk Road, Jaipur',
    price: '₹45,00,000',
    type: 'Residential Plot',
    imageFallbackColor: 'bg-amber-100',
    isPlot: true,
  },
  {
    id: '3',
    title: 'Commercial Land Frontage',
    location: 'Main Tonk Road, Shivdaspura',
    price: '₹1,20,00,000',
    type: 'Commercial Plot',
    imageFallbackColor: 'bg-blue-100',
    isPlot: true,
  },
  {
    id: '4',
    title: 'Developing Sector Plot',
    location: 'Vatika Road, Jaipur',
    price: '₹32,00,000',
    type: 'Residential Plot',
    imageFallbackColor: 'bg-stone-100',
    isPlot: true,
  },
  {
    id: '5',
    title: 'Large Institutional Land',
    location: 'Shivdaspura, Jaipur',
    price: '₹5,50,00,000',
    type: 'Agricultural',
    imageFallbackColor: 'bg-slate-200',
    isPlot: true,
  },
  {
    id: '6',
    title: 'Prime Corner Plot',
    location: 'Vatika, Tonk Road',
    price: '₹28,50,000',
    type: 'Residential Plot',
    imageFallbackColor: 'bg-indigo-100',
    isPlot: true,
  },
];
