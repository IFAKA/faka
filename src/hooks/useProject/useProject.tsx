import { initState } from "@/models"
import { fetcher, URL } from "@/services"
import { filterRepos, formatApi } from "@/utils"
import { useEffect, useState } from "react"
import useSWR from "swr"

const useProject = () => {
  const [projects, setProjects] = useState(initState)
  const { data, error } = useSWR(URL, fetcher)
  const isLoaded = !!data

  useEffect(() => {
    if (data) {
      const rawRepos = formatApi(data)
      const repos = filterRepos(rawRepos)
      setProjects(repos)
    }
  }, [data])

  return { projects, isLoaded, error }
}

export default useProject
