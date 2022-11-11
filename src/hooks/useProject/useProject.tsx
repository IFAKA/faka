import { initState, url } from '@/models'
import { fetcher } from '@/services'
import { filterRepos, formatApi } from '@/utils'
import { useEffect, useState } from 'react'

const useProject = () => {
    const [projects, setProjects] = useState(initState)

    const getProjects = async () => {
        const apiRes = await fetcher(url)
        const rawRepos = formatApi(apiRes)
        const repos = filterRepos(rawRepos)
        setProjects(repos)
    }
    
    useEffect(() => { getProjects() }, [])
    
    return projects
}

export default useProject