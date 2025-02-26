export interface StoreService {
  image?: string;
  price?: number;
  name?: string;
}

export const beardServices: StoreService[] = [
  {
    name: 'Cabelo',
    price: 15,
  },
  {
    name: 'Barba',
    price: 10,
  },
  {
    name: 'Cabelo & Barba',
    price: 23,
  },
  {
    name: 'Cabelo Comprido',
    price: 19,
  },
  {
    name: 'Cabelo Comprido & Barba',
    price: 26,
  },
  {
    name: 'Corte Criança (até 4 anos)',
    price: 15,
  },
  {
    name: 'Cabelo + Tratamento Caspa',
    price: 19,
  },
  {
    name: 'Cabelo + Hidratação Cabelo',
    price: 19,
  },
  {
    name: 'Pigmentação',
    price: 10,
  },
];

export const beautyServices: StoreService[] = [
  {
    name: 'Sobrancelhas Linha',
    price: 8,
  },
  {
    name: 'Sobrancelhas Cera',
    price: 5,
  },
  {
    name: 'Depilação Corpo',
    price: 60,
  },
  {
    name: 'Depilação Tronco',
    price: 35,
  },
  {
    name: 'Depilação Braços',
    price: 20,
  },
  {
    name: 'Depilação Axilas',
    price: 15,
  },
  {
    name: 'Depilação Pernas',
    price: 35,
  },
  {
    name: 'Depilação Costas',
    price: 20,
  },
];
