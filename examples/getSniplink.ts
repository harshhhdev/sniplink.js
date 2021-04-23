import * as sniplink from 'sniplink.js'

new sniplink.GetSnippedLink('jvX')
  .getLink()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
