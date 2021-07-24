import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 11;
  transition: 0.8s all ease;

  @media screen and (max-width: 1100px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled( LinkR )`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.2rem;
  width: 140px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #EA5D5F;
    text-decoration: none;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-left: -70px;
  margin-bottom: 0;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  margin: 0 10px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.75rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #fff;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #EA5D5F;
    text-decoration: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px){
    display: none;
  }
`

// For use if using react router - if I make a dedicated contact page
// export const NavBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: #EA5D5F;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   font-weight: 550;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #EA5D5F;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  font-weight: 550;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`