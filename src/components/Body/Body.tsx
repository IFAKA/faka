import { useProject } from "@/hooks"
import { ITEM_HEIGHT } from "@/models"
import RenderViewport from "react-render-if-visible"
import { Project } from "../Project"
import { Render } from "../Render"

const Body = () => {
  const { projects, isLoaded, error } = useProject()
  return (
    <Render when={isLoaded} error={error}>
      <div className="flex justify-center">
        <div className="w-full grid 2xl:grid-cols-5 sm:grid-cols-3 gap-4 p-4">
          {projects?.map((project, i) => (
            <RenderViewport
              key={project.id}
              defaultHeight={ITEM_HEIGHT}
              stayRendered={true}
            >
              <Project project={project} i={i} />
            </RenderViewport>
          ))}
        </div>
      </div>
    </Render>
  )
}

export default Body
