import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'sj-sunset-tee',
    title: 'San Junipero Sunset',
    category: 'T-SHIRT',
    price: 45,
    originalPrice: 65,
    episode: 'san-junipero',
    colors: ['#ff006e', '#00f5ff', '#9d4edd'],
    description: 'Heaven is a place on earth. Premium cotton tee with neon sunset design.',
  },
  {
    id: 'uss-hoodie',
    title: 'Digital Doll Hoodie',
    category: 'HOODIE',
    price: 75,
    originalPrice: 95,
    episode: 'uss-callister',
    description: 'Infinity awaits. Premium heavyweight hoodie.',
  },
  {
    id: 'wc-cookie-mug',
    title: 'Cookie Protocol',
    category: 'MUG',
    price: 25,
    episode: 'white-christmas',
    description: 'Your digital consciousness in a cup. Ceramic mug.',
  },
  {
    id: 'nosedive-case',
    title: '4.2 or Higher',
    category: 'PHONE CASE',
    price: 35,
    episode: 'nosedive',
    rating: 4.8,
    description: 'Rate everything. Premium protective case.',
  },
  {
    id: '15m-merits-tee',
    title: '15 Million Merits',
    category: 'T-SHIRT',
    price: 42,
    episode: 'fifteen-million',
    description: 'Earn your freedom. Limited edition cycle-breaking tee.',
  },
  {
    id: 'ashley-too-figure',
    title: 'Ashley Too Collectible',
    category: 'COLLECTIBLE',
    price: 85,
    episode: 'ashley-too',
    description: "I'm On A Roll! Limited edition AI companion.",
  },
  {
    id: 'bandersnatch-poster',
    title: 'Choose Your Path',
    category: 'POSTER',
    price: 30,
    episode: 'bandersnatch',
    description: 'Multiple endings. One choice. Premium print.',
  },
  {
    id: 'grain-tech',
    title: 'Grain Replica',
    category: 'TECH',
    price: 120,
    episode: 'entire-history',
    description: 'Remember everything. Forget nothing. Collectible replica.',
  },
];

export const SECRET_CODES = {
  SANJUNIPERO: {
    message: 'Heaven is a place on earth. 20% off all neon collection!',
    discount: 'HEAVEN20',
  },
  WHITECHRISTMAS: {
    message: "Cookie detected. You've unlocked the Digital Consciousness collection.",
    discount: 'COOKIE25',
  },
  NOSEDIVE: {
    message: 'Your rating: 4.999 ⭐ - Free shipping unlocked!',
    discount: 'RATING5',
  },
  '15MILLION': {
    message: "You've earned your merits. Exclusive merch bundle unlocked.",
    discount: 'MERITS15',
  },
  BANDERSNATCH: {
    message: 'Wrong path. Or is it? Choose again... or did you already?',
    discount: 'CHOICE10',
  },
  ASHLEYTOO: {
    message: "I'm On A Roll! Ashley Too collection unlocked.",
    discount: 'ASHLEY30',
  },
  USSDEADASS: {
    message: "Captain's orders: 30% off USS Callister merch.",
    discount: 'CAPTAIN30',
  },
};
