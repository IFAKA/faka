import axios from "axios"

const fetcher = async (url: string) => await axios.get(url).then((r: any) => r.data)

export default fetcher
