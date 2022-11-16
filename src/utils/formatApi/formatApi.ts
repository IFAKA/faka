import { IProject } from "@/models"
import { sentenceCase } from "../sentenceCase"

const formatApi = (apiRes: unknown[]): IProject[] =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apiRes?.map((repo: any) => ({
    id: repo.id,
    href: repo.homepage,
    name: sentenceCase(repo.name).replace(/-/g, " "),
    desc: repo.description,
    tags: repo.topics.map((topic: string) => sentenceCase(topic)),
  }))

export default formatApi
