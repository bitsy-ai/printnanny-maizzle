/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
  build: {
    fail: 'verbose',

    templates: {
      destination: {
        path: 'build_production',
      },
    },
  },
  inlineCSS: true,
  attributeToStyle: true,
  prettify: true,

  // removeUnusedCSS: true,
}
