import axios from 'axios'

export class GetSnippedLink {
  id: string

  constructor(id: string) {
    this.id = id
  }

  async getLink() {
    const response = await axios.get(
      `https://beta.sniplink.net/api/v1/link/${this.id}`
    )
    return response.data
  }
}
