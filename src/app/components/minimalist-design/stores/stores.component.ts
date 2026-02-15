import { Component } from '@angular/core';

type Store = {
  name: string;
  cityLabel: string;
  description: string;
  image: string;
  mapsUrl: string;
};

@Component({
  selector: 'app-stores',
  imports: [],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss',
})
export class StoresComponent {
  stores: Store[] = [
    {
      name: 'The Lord Prive',
      cityLabel: 'Ribeirão',
      description:
        'Experiência exclusiva, detalhe premium e cuidados masculinos personalizados.',
      image: 'assets/slider/6.png',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=The%20Lord%20Prive%20Ribeirao',
    },
    {
      name: 'The Lord ST',
      cityLabel: 'Santo Tirso',
      description:
        'Cortes modernos, barba profissional e estética masculina no centro de Santo Tirso.',
      image: 'assets/stores/st.jpg',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=The%20Lord%20ST%20Santo%20Tirso',
    },
  ];
}
