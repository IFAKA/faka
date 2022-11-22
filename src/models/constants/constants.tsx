import {
  RiFileUserLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri"
import { IProject } from "../types"

export const initState: IProject[] = []

export const url = "https://api.github.com/users/IFAKA/repos"

export const contacts = [
  { href: "https://github.com/IFAKA", icon: <RiGithubLine size={19} /> },
  {
    href: "https://www.linkedin.com/in/faka/",
    icon: <RiLinkedinBoxLine size={20} />,
  },
  { href: "mailto:me@faka.dev", icon: <RiMailLine size={20} /> },
  { href: "/assets/Facundo Arenas CV.pdf", icon: <RiFileUserLine size={20} /> },
]
