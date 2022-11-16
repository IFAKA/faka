import axios from "axios"

async function fetcher(url: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await axios.get(url).then((r: any) => r.data)
}

export default fetcher
