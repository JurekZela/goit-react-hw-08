import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
gap: 5px;
`;

export const NavigationLink = styled(NavLink)`
text-decoration: none;
list-style: none;
margin: 0;
padding: 0;
color: black;

&:hover {
    color: blue;
}
`;