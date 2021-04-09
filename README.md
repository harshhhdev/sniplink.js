<p align='center'>
    <a href="https://beta.sniplink.net/">
    <h2 align="center">sniplink.js</h2>
  </a>
  <p align="center">A Node.js API wrapper for SnipLink</p>
  <p align="center">This provides full support for the current <a href="https://beta.sniplink.net/api/docs/index.html">v1 API</a></p>
</p>

# Usage

## /link 📎

### 🔗 Creating a snipped link

```ts
import * as sniplink 'sniplink.js''

new sniplink.CreateSnippedLink('1618536464', 'https://google.com/')
  .createSnippedLink()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
```

### 🖇️ Getting a snipped link

```ts
import * as sniplink from 'sniplink.js'

new sniplink.GetSnippedLink('jvX')
  .getLink()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

```