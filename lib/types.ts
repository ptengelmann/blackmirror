export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  episode: string;
  colors?: string[];
  rating?: number;
  image?: string;
  description?: string;
  longDescription?: string;
  sizes?: string[];
  stock?: number;
  features?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface EasterEgg {
  code: string;
  message: string;
  discount: string;
}

export interface SecretCode {
  [key: string]: {
    message: string;
    discount: string;
  };
}
