import { CardProfileContainer, ProfileInfo } from './styles'
import ProfileImg from './../../assets/perfil.jpg'

export default function CardProfile() {
  return (
    <CardProfileContainer>
      <img src={ProfileImg} alt="" />

      <ProfileInfo>
        <header>
          <h2>Nathan Baldez</h2>
          <a href="https://github.com/nthbaldez">GITHUB</a>
        </header>

        <p>
          Sou formado em Análise e Desenvolvimento de Sistemas. Movido pelos
          constantes desafios que acarretam o Desenvolvimento Web, seja no
          Front-end como no Back-end.{' '}
        </p>

        <footer>
          <a href="https://github.com/nthbaldez">nthbaldez</a>
          <span>Cask LATAM</span>
          <span>4 seguidores</span>
        </footer>
      </ProfileInfo>
    </CardProfileContainer>
  )
}
