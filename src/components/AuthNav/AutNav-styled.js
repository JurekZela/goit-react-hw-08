import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
gap: 20px;
`;


export const AuthNavLinks = styled(NavLink)`
text-decoration: none;
list-style: none;
margin: 0;
padding: 0;
display: inline-block;
  font-weight: 700;
  color: black;
  font-size: 20px;



&:hover {
    color: blue;
}
`;

export const Authentication = styled.div`
display: flex;
    gap: 10px;
    `;