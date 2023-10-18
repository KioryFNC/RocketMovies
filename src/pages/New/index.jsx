import { Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { MovieItem } from "../../components/MovieItem"
import { Link } from "react-router-dom";


export function New(){
  return(
    <Container>
      
      <Header/>
      
      <main>
        <Content>

          <Link to="/">
            <ButtonText title ="Back"/>
          </Link>
          
          <h1>My Movie Reviews</h1>

          <div className="inputs">
            <Input placeholder="Title"/>
            <Input placeholder="Your score (between 0-5)"/>
          </div>

          <TextArea placeholder="Obs.:"/>
          
          <Section title="Markers">
            <div className="tags">
              <MovieItem value ="Drama" />
              <MovieItem value ="Ação" />
              <MovieItem isNew placeholder="New Marker"/>
            </div>
          </Section>
          <div>
            <Button 
              title="Discard" 
            />

            <Button 
              title="Save" 
            />
          </div>

        </Content>
      
      </main>

    </Container>
  )
}