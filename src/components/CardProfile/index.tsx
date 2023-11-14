import { CardProfileContainer, ProfileInfo } from './styles'
import { FaGithub } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi'
import { ArrowSquareOut } from 'phosphor-react'

interface UserDataProps {
  login: string
  avatarUrl: string
  followers: number
  company: string
}

export default function CardProfile({
  login,
  avatarUrl,
  followers,
  company,
}: UserDataProps) {
  return (
    <CardProfileContainer>
      <img src={avatarUrl} alt="" />

      <ProfileInfo>
        <header>
          <h2>Nathan Baldez</h2>
          <a href="https://github.com/nthbaldez">
            GITHUB
            <ArrowSquareOut size={20} weight="fill" />
          </a>
        </header>

        <p>
          Sou formado em Análise e Desenvolvimento de Sistemas. Movido pelos
          constantes desafios que acarretam o Desenvolvimento Web, seja no
          Front-end como no Back-end.{' '}
        </p>

        <footer>
          <a href="https://github.com/nthbaldez">
            <FaGithub color="#3A536B" size={18} />
            <span>{login}</span>
          </a>

          <span>
            <FaBuilding color="#3A536B" size={18} />
            {company}
          </span>

          <span>
            <HiUsers color="#3A536B" size={18} />
            {followers} seguidores
          </span>
        </footer>
      </ProfileInfo>
    </CardProfileContainer>
  )
}
