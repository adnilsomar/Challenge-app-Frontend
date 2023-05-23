import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Container, Form, Background } from './style';
import { Input } from '../../components/Input'
import { Button} from '../../components/Buttons'

export function SignIn(){
  return(
    <Container>
      
      <Form>

        <div>

        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        </div>


        <h2>Faça seu login</h2>

        <div className='input'>

        <Input
          placeholder="E-mail"
          type = "email"
          icon={FiMail}/>

        </div>

        <div className='input'>

        <Input
        placeholder="Senha"
        type = "Password"
        icon={FiLock}/>

        </div>


        <Button title="Entrar"/>

        <div>

        <Link to="/register">Criar Cuenta</Link>

        </div>


      </Form>

      <Background/>

   
    </Container>
  )
}