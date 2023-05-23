import {Container, Content, ButtonNew, StyledScrollbars, ScrollContent } from './style';
import {FiPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import {Header} from '../../components/Header'
import {Button} from '../../components/Buttons'
import {Sumary} from '../../components/Sumary'


export function Home(){
  return(
    <Container>

      <Header/>

      <ButtonNew>
        <h1>Meus Filmes</h1>

        <div >
        <FiPlus/>
        
        <Link className="addMovie" to="/new"> Adicionar filme</Link>
        </div>

      </ButtonNew>

      <Content>

      <StyledScrollbars>
        <ScrollContent>



        <Sumary/>
        <Sumary/>
        <Sumary/>
 
        </ScrollContent>
      </StyledScrollbars>
     
      </Content>


    </Container>


  )
}


