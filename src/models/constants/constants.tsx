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
  {
    href: "https://docs.google.com/document/d/1LmdIIMoGstnywAwh2e8QXqMZ3YSmWmUENMMkO4nCvwc/edit?usp=sharing",
    icon: <RiFileUserLine size={20} />,
  },
]
