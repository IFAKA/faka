import { Repo } from "@/models"
import axios from "axios"

const fetcher = async (url: string): Promise<Repo[]> =>
  await axios.get(url).then((r: { data: Repo[] }) => r.data)

export default fetcher