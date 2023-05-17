import './SecaoIniciativas.css'
import CardIniciativa from './CardIniciativa.jsx'

export default function SecaoIniciativas() {
  return (
    <div className="container-conteudo">
      <h2>INICIATIVAS</h2>

      <div className="container-cards">
        <CardIniciativa
          nome="Curso de Programação"   
          imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/programacao.png"
        />
        <CardIniciativa
          nome="Contrate quem luta"   
          imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/contrate.png"
        />
        <CardIniciativa
          nome="App da Vitória"   
          imagem="https://nucleodetecnologia.com.br/assets/img/portfolio/app-vitoria.png"
        />
      </div>
    </div>
  )
}
