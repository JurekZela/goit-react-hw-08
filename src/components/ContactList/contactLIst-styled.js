import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-left: 1px solid;
border-right: 1px solid black;
padding: 10px;
gap: 20px;
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