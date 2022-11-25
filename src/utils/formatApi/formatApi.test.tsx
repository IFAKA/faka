import "@testing-library/jest-dom"
import formatApi from "./formatApi"

const repos = [
  {
    id: 0,
    homepage: "www.internet.com",
    name: "Title",
    description: "Description",
    topics: ["tag"],
    github: "github.com/IFAKA",
  },
]

const potableRepos = [
  {
    id: 0,
    href: "www.internet.com",
    name: "Title",
    desc: "Description",
    tags: ["tag"],
  },
]

describe("formatApi", () => {
  it("format repos", async () => {
    const formatedRepos = formatApi(repos)
    expect(formatedRepos).toEqual(potableRepos)
  })
})
