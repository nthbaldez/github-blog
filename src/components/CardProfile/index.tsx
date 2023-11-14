import { CardProfileContainer, ProfileInfo } from './styles'
import { FaGithub } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi'
import { ArrowSquareOut } from 'phosphor-react'
import ProfileImg from './../../assets/perfil.jpg'

export default function CardProfile() {
  return (
    <CardProfileContainer>
      <img src={ProfileImg} alt="" />

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
            <span>nthbaldez</span>
          </a>

          <span>
            <FaBuilding color="#3A536B" size={18} />
            Cask LATAM
          </span>

          <span>
            <HiUsers color="#3A536B" size={18} />4 seguidores
          </span>
        </footer>
      </ProfileInfo>
    </CardProfileContainer>
  )
}
