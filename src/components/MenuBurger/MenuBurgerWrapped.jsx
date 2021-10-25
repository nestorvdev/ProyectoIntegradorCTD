import styled from "styled-components"

export const MenuBurgerWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  position: fixed;
  top: 0px;
  
  
  right: ${props => (props.show ? "0" : "-100%")};

  height: 100vh;
  width: 73vw;
  transition: right 0.3s linear;
  
  @media only screen and (min-width: 415px) {
    display:none;
  }

  .mobileHeader{
    background-color: var(--primary-color);
    height: 23.5vh;
    width:73vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  
  .close {
    color: white;
    padding:5px 10px;
    font-weight: var(--font-bold);
    font-size: 24px;
  }

  .close a{
    text-decoration: none;
  }

  .avatar{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-self: flex-end;
    padding: 5px 12px;
  }

  .logoMobile{
    align-items: center;
    color: var(--tertiary-color);
    display: flex;
    flex-wrap: wrap;
  }

  .logoMobile p {
    background-color: var(--secondary-color);
    border-radius: 50%;
    color: white;
    font-size: var(--heading3);
    font-weight: var(--font-bold);
    padding: 5px;
  }

  .text h3, .mobileBody p {
    font-size: var(--heading3);
    font-weight: var(--font-bold);
    
  }
  
  .text h3.great {
    color:var(--quaternary-color);
    opacity: 50%;
    text-align: right;
  }
  
  .text h3.name {
    color: var(--secondary-color);
  }
  
  .textMenu{
    font-weight: var(--font-bold);
    color: white;
    font-size: var(--heading2);
    text-align: right;
    padding:5px 12px;
  }

  .mobileBody{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    height:62.5vh;
    padding: 31px 12px;
    width: 73vw;
  }

  .botones{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 10vh;
  }

  .botones img{
    width:67vw
  }

  .botones p{
    color: var(--secondary-color);
  }

  .mobileFooter{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    padding-right: 20px;
    height: 14vh;
    width:73vw;
  }

  .logOut{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 2.5vh;
  }

  .logOut div{
    font-weight: var(--font-medium);
    font-size: 12px;
  }

  .logOut div a{
    text-decoration: none;
    color: var(--primary-color);
  }
  
  .iconsMobile{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 33vw;
    height: 6vh;
  }

  .hide{
    display: none;
    text-align:right;
  }

  .subir{
    justify-content:flex-start;
  }

`