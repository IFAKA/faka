import { IProject, Repo } from "@/models"
import { sentenceCase } from "../sentenceCase"

const formatApi = (apiRes:Repo[]): IProject[] =>
  apiRes?.map((repo) => ({
    id: repo.id,
    href: repo.homepage ?? "",
    name: sentenceCase(repo.name).replace(/-/g, " "),
    desc: repo.description ?? "",
    tags: repo.topics.map((topic: string) => sentenceCase(topic)),
  }))

export default formatApi
