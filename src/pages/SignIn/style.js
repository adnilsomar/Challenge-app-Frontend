import styled from 'styled-components';
import background from '../../assets/background.svg'

export const Container = styled.div`
  
  height: 100vh;

  display: flex;
  
 
`;

export const Form = styled.form`

  padding: 0 15rem;
  width: 64rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  

> div h1{
  color: ${({theme})=> theme.COLORS.PINK};
  font-size: 4.8rem;
}

> div p{
  color: ${({theme})=> theme.COLORS.GRAY_P};
  font-size: 1.4rem;

  margin-bottom: 4.8rem;
}
> h2{
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: 2.4rem;

  margin-bottom: 4.8rem;
}

> div a{

  display: flex;
  justify-content: center;
  margin-top:4.2rem;
  color: ${({theme})=> theme.COLORS.PINK};
}

>.input{
  margin-bottom: .8rem;
}
>.input:nth-child(4){
  margin-bottom: 1.6rem;
}

`;

export const Background = styled.div`
flex: 1;

background: url(${background}) no-repeat center center;
background-size: cover;

`;

