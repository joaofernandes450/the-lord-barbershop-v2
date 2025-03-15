
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://joaofernandes450.github.io/the-lord-barbershop-v2/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23655, hash: '01f19b31c8a0326872a75476052d63fcafe43b6794ccff79265e87c7c15a2caa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17229, hash: '146cb485ef142b907c80fcac5216a1a78673afe194131ee2585a9302a0c1585b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FEF4XXTS.css': {size: 7184, hash: '3EN+vdIqV6s', text: () => import('./assets-chunks/styles-FEF4XXTS_css.mjs').then(m => m.default)}
  },
};
