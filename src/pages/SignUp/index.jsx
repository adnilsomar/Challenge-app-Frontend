import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Form, Background } from './style';
import {Input} from '../../components/Input';
import { Button} from '../../components/Buttons';

export function SignUp(){
  return(
    <Container>
      <Form>

        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>


        <div className='input'>
        <Input
        placeholder="Nome"
        type = "text"
        icon={FiUser}/>  
        </div>

        <div className='input'>
        <Input
          placeholder="E-mail"
          type = "email"
          icon={FiMail}/>
        </div>

        <div className='input'>
        <Input
        placeholder="Senha"
        type = "password"
        icon={FiLock}/>
        </div>

        <Button title="Cadastrar"/>

        <Link to="/"> <FiArrowLeft/>Voltar para o login</Link>

      </Form>

      <Background/>

   
    </Container>
  )
}