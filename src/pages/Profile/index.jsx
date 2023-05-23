import { Container, ProfilePhoto, Header } from "./style";
import {FiMail, FiUser, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { Input } from '../../components/Input'
import {Button} from '../../components/Buttons'

export function Profile(){
  return(

    <Container>
      

      <Header>
      <Link to="/"> <FiArrowLeft/>Voltar</Link>
      </Header>

      <div>

      <ProfilePhoto>

      <img 
        src="https://github.com/adnilsomar.png"
        alt="Foto do usuario"
        />

      <label htmlFor="profilephoto">
      <FiCamera/>

     { <input
      id="profilephoto"
      type="file"
      />}


      </label>

      </ProfilePhoto>


      <div className="input">

        <Input
        defaultValue = {`Linda Ramos`}
        type = "text"
        icon={FiUser}
        />
      </div>

      <div className="input">

      <Input
      defaultValue = {`Linda@email.com`}
      type = "email"
      icon={FiMail}
      />
      </div>

      <div className="input">

      <Input
        placeholder="Senha atual"
        type = "Password"
        icon={FiLock}/>

      </div>

      <div className="input">

      <Input
        placeholder="Nova senha"
        type = "Password"
        icon={FiLock}/> 
      </div>

      <Button title="Salvar"/>

      </div>






    </Container>

  )
}