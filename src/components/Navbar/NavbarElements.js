import { Link } from "gatsby"
import styled from "styled-components"
import { MdRestaurant } from "react-icons/md"

export const Nav = styled.nav`
  position: sticky! ; 
  top: 0;
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  /* justify-content: center; */

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`

export const Bars = styled(MdRestaurant)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-top: 3rem;
`
