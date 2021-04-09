import * as sniplink from './../src/sniplink'

new sniplink.CreateSnippedLink('1618536464', 'https://google.com/')
  .createSnippedLink()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
