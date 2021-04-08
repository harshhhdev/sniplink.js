import axios from 'axios'

export class GetSnippedLink {
  id: string

  constructor(id: string) {
    this.id = id
  }

  public async getPaste() {
    const response = await axios.get(
      `https://beta.sniplink.net/api/v1/link/${this.id}`
    )

    return response
  }
}

const SnippedLink = new GetSnippedLink('j1W')
console.log(SnippedLink)
