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

export class CreateSnippedLink {
  expirationTime: number
  value: string

  constructor(expirationTime: number, value: string) {
    this.expirationTime = expirationTime
    this.value = value
  }

  async createSnippedLink() {
    const response = await axios.post('https://beta.sniplink.net/api/v1/link', {
      expirationTime: this.expirationTime,
      value: this.value,
    })
    return response.data
  }
}

new CreateSnippedLink(1618536464, 'https://google.com/')
  .createSnippedLink()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
