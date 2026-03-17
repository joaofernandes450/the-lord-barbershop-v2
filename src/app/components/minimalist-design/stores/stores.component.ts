import { Component } from '@angular/core';

type Store = {
  name: string;
  cityLabel: string;
  description: string;
  image: string;
  mapsUrl: string;
  googleSearch: string;
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
      image: 'assets/stores/prive.jpg',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=The%20Lord%20Prive%20Ribeirao',
      googleSearch:
        'https://www.google.com/search?sca_esv=2aff81bb00e41461&rlz=1C1CHBF_pt-PTPT1075PT1075&biw=2560&bih=1279&sxsrf=ANbL-n5PsRWlSyoaimiLzewz83ZVsnJpkg:1770399010643&kgmid=/g/11l6l0pcrs&q=The+Lord+Prive&shndl=30&source=sh/x/loc/uni/m1/1&kgs=2930ea65b8640547&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/uni/m1/1',
    },
    {
      name: 'The Lord ST',
      cityLabel: 'Santo Tirso',
      description:
        'Cortes modernos, barba profissional e estética masculina no centro de Santo Tirso.',
      image: 'assets/stores/st.jpg',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=The%20Lord%20ST%20Santo%20Tirso',
      googleSearch:
        'https://www.google.com/search?sca_esv=2aff81bb00e41461&rlz=1C1CHBF_pt-PTPT1075PT1075&sxsrf=ANbL-n62Z65UQfYvOASdJPeIzHdtcqqPkw:1770398994770&kgmid=/g/11w98kvgf_&q=The+Lord+ST&shndl=30&source=sh/x/loc/uni/m1/1&kgs=f13fcc232bb31f38&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/uni/m1/1',
    },
  ];
}
