import "@testing-library/jest-dom"
import { findAllByRole, render, waitFor } from "@testing-library/react"
import Body from "./Body"

describe("Body", () => {
  it("renders a Body", async () => {
    const { container } = render(<Body />)

    const links = await findAllByRole(container, "link")
    const titles = await findAllByRole(container, "heading")
    const descriptions = await findAllByRole(container, "paragraph")
    const tags = await findAllByRole(container, "tag")

    await waitFor(() => {
      expect(links[0]).toBeInTheDocument()
      expect(titles[0]).toBeInTheDocument()
      expect(descriptions[0]).toBeInTheDocument()
      expect(tags[0]).toBeInTheDocument()
    })
  })
})
