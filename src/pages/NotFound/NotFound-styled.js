import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NotFoundBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Button = styled.button`

background-color: #0866FF;
border: none;
padding: 15px;


`;

export const LinkBtn = styled(NavLink)`
color: white;
text-decoration: none;

&:hover {
    color: #AAC9FF;
}
`;