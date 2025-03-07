export interface StoreService {
  image?: string;
  price?: number;
  name?: string;
}

export const beardServices: StoreService[] = [
  {
    name: 'Cabelo',
    price: 15,
    image: 'assets/services/cabelo.png',
  },
  {
    name: 'Barba',
    price: 10,
    image: 'assets/services/barba.png',
  },
  {
    name: 'Cabelo & Barba',
    price: 23,
    image: 'assets/services/cabelo_barba.png',
  },
  // {
  //   name: 'Cabelo Comprido',
  //   price: 19,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Cabelo Comprido & Barba',
  //   price: 26,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Corte Criança (até 4 anos)',
  //   price: 15,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Cabelo + Tratamento Caspa',
  //   price: 19,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Cabelo + Hidratação Cabelo',
  //   price: 19,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Pigmentação',
  //   price: 10,
  //   image: 'assets/services/cabelo.png',
  // },
];

export const beautyServices: StoreService[] = [
  {
    name: 'Sobrancelhas Linha',
    price: 8,
    image: 'assets/services/sobrancelhas.png',
  },
  // {
  //   name: 'Sobrancelhas Cera',
  //   price: 5,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Depilação Corpo',
  //   price: 60,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Depilação Tronco',
  //   price: 35,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Depilação Braços',
  //   price: 20,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Depilação Axilas',
  //   price: 15,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Depilação Pernas',
  //   price: 35,
  //   image: 'assets/services/cabelo.png',
  // },
  // {
  //   name: 'Depilação Costas',
  //   price: 20,
  //   image: 'assets/services/cabelo.png',
  // },
  {
    name: 'Limpeza Pele',
    image: 'assets/services/limpeza_pele.png',
  },
  {
    name: 'Massagem',
    image: 'assets/services/massagem.png',
  },
];
