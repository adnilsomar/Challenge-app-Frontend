import styled from 'styled-components'

export const Container = styled.button`
width: 100%;
height: 5.6rem;
padding: 1.6rem ;
margin-top: 1.6rem;

border: none;

background-color: ${({theme})=>theme.COLORS.PINK};
font-size: 1.6rem;
color: ${({theme})=>theme.COLORS.GRAY_400} ;

border-radius: 1rem;

&:disabled{
    opacity: 0.5;
  }

`;