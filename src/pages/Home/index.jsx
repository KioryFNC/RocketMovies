import { Container, Content, NewMovie } from "./styles"
import { FiPlus } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"
import { Link } from "react-router-dom"

export function Home(){
  return(
    <Container>
      <Header/>
      
      <main>
        <Content>

          <header>
            <h1>My Movies</h1>
            <NewMovie to="/new">
              <FiPlus/>
              Add Movie
            </NewMovie>
          </header>
          <Link to="/note/1">
            <Movie data={{
              title: 'Interstellar',
              grade: '5',
              description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
              
              Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.`,
              tags:[
                {id:'1', name: 'Ficção Científica'},
                {id:'2', name: 'Drama'},
                {id:'3', name: 'Familia'}
              ]
              }}/>
          </Link>

          <Link to="/note/2">
          
          <Movie data={{
            title: 'Sinais',
            grade: '4',
            description: `No condado de Bucks, Pensilvânia, vive o viúvo Graham Hess e seus dois filhos, Morgan e Bo. Ele costumava ser o pastor da região, mas se recusa a ser chamado assim desde que sua mulher, Colleen, morreu atropelada por Ray Reddy, um de seus vizinhos. Os Hess ficam intrigados com o aparecimento de misteriosos círculos em sua plantação sem que haja o menor vestígio de quem os fez ou por qual motivo teriam sido feitos.`,
            tags:[
              {id:'1', name: 'Ficção Científica'},
              {id:'2', name: 'Aventura'},
                {id:'3', name: 'Ação'},
                {id:'4', name: 'Fantasia'}
              ]
            }}/>
          </Link>      
              
        </Content>
      </main>

    </Container>
  )
}