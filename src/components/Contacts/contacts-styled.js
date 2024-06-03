import { styled } from 'styled-components';

export const Card = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-left: auto;
margin-right: auto;
border: 1px solid black;
padding: 10px;
gap: 20px;
width: 380px;
`;

export const Title = styled.p`
font-weight: 350px;
font-size: 17px;
padding-bottom: 5px;
`;

export const ListContact = styled.li`
padding: 5px;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
`;