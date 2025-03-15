
export default {
  basePath: 'https://joaofernandes450.github.io/the-lord-barbershop-v2',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
