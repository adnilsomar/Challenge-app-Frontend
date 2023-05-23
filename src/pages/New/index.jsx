import { Container, Main, StyledScrollbars} from "./style";
import {FiArrowLeft} from 'react-icons/fi'
import { Link } from "react-router-dom";
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import { NoteItems } from "../../components/NoteItems";
import { Button } from "../../components/Buttons";



export function New(){
  return(

    <Container>
      <Header/>

      <StyledScrollbars>
      <Main>


      <Link to="/"><FiArrowLeft/>Voltar</Link>
        <h1>Novo Filme</h1>

        <div className="input">
        <Input type= "text"  placeholder="titulo" />
        <Input type= "number" placeholder="Sua nota (de 0 a 5)" />
        </div>

        <Textarea placeholder="Observações"/>

        <h2>Marcadores</h2>

        <div className='tags'>
          <NoteItems value="React"/>
           <NoteItems isNew placeholder="Novo marcador"/>
            
        </div>

        <div className="button">
        <Button className="delete" title="Excluir filme"/>
        <Button title="Salvar alterações"/>
        </div>

      </Main>
      </StyledScrollbars>

    </Container>

  )


}