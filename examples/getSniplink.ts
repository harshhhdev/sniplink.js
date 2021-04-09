import * as sniplink from './../src/sniplink'

new sniplink.GetSnippedLink('jvX')
  .getLink()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
