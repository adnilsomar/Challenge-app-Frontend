import { Link } from "react-router-dom";
import { Container, Profile} from "./style";
import { Input } from "../Input";

export function Header(){
  return(
    <Container>

      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo titulo"/>

      <Profile>
        <div>
        <strong>Linda Ramos</strong> 
        <Link to="/">Sair</Link>
        </div>

        <div className="image">

        <Link to="/profile">
          <img 
        src="https://github.com/adnilsomar.png"
        alt="Foto do usuario"/>
        
        </Link>

        </div>

       
      
      </Profile>

    </Container>
  )
}