import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
gap: 5px;
`;

export const NavigationLinks = styled(NavLink)`
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

&:not(:last-child) {
  margin-right: 30px;
}
`;

export const UserInfo = styled.div`
display: block;
    unicode-bidi: isolate;
    `;